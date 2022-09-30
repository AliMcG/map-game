import "./App.css";
import { useState, useEffect } from "react";
import LeafletMap from "./LeafletMap/LeafletMap.js";
import MapboxMapTile from "./MapboxMap/MapboxMap.js";
import Instructions from "./Instructions/Instructions.js";
import Scoreboard from "./Scoreboard/Scoreboard.js";
import useSettingsModal from "../hooks/useSettingsModal";
import SettingsModal from "./SettingsModal/SettingsModal";
function App() {
    const [long, setLong] = useState();
    const [lat, setLat] = useState();
    const [distance, setDistance] = useState();
    const [difficulty /* setDifficulty */] = useState({ minDistance: 100 });
    const [guesses, setGuesses] = useState(0);
    const { toggleModal,showModal } = useSettingsModal();
    /* FIXME: Proposed example difficulty object:  
        { 
            minDistance: 50 (km)
            mapTileZoom: 5
            RoadNames: false 
        }
    */

    useEffect(() => {
        getRandomCoords();
    }, []);
    async function getRandomCoords() {
        // const url = "https://api.3geonames.org/?randomland=yes&json=1";
        // const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
        // const data = await response.json();
        // setLat(data.major.latt);
        // setLong(data.major.longt);
        setLat(50.71344);
        setLong(-3.5444);
        // setPosition([data.major.latt, data.major.longt]);
    }
    function handleReset() {
        setGuesses(0);
        setDistance(0);
        getRandomCoords();
    }
    return (
        <>
            <div className="App">
                <div className="game-components">
                    {long && <MapboxMapTile long={long} lat={lat} />}
                    <Scoreboard distance={distance} guesses={guesses} />
                    {long && (
                        <LeafletMap
                            distance={distance}
                            setDistance={setDistance}
                            long={long}
                            lat={lat}
                            difficulty={difficulty}
                            setGuesses={setGuesses}
                        />
                    )}
                </div>
                <div className="lower-container">
                    <Instructions />
                    <button
                        onClick={() => {
                            handleReset();
                        }}
                    >
                        Reset
                    </button>
                </div>
                <button onClick={toggleModal}>Settings</button>
                {showModal &&<SettingsModal />}
            </div>
        </>
    );
}

export default App;
