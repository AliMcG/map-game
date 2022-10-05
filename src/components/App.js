import "./App.css";
import { useState, useEffect } from "react";
import LeafletMap from "./LeafletMap/LeafletMap.js";
import MapboxMapTile from "./MapboxMap/MapboxMap.js";
import Instructions from "./Instructions/Instructions.js";
import Scoreboard from "./Scoreboard/Scoreboard.js";
import useSettingsModal from "../hooks/useSettingsModal";
import SettingsModal from "./SettingsModal/SettingsModal";
import Timer from "./Timer/Timer";
import useSettings from "../hooks/useSettings";
function App() {
    const { difficulty, changeTileZoom } = useSettings();
    // Sets a date time number for five minutes in future
    // Gets the time now and then adds to 2 numbers together to pass to the timer component
    const inFiveMinutes = 1 * 5 * 1 * 60 * 1000;
    const now = new Date().getTime();
    const timer = now + inFiveMinutes;

    const [long, setLong] = useState();
    const [lat, setLat] = useState();
    const [distance, setDistance] = useState();
    //   const [difficulty /* setDifficulty */] = useState({ minDistance: 100 });
    const [guesses, setGuesses] = useState(0);
    const { toggleModal, showModal } = useSettingsModal();
    const [answer, setAnswer] = useState(false);
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
    console.log("dtz (app):",difficulty.tileZoom)
    return (
        <>
            <div className="App">
                <div className="game-components">
                    {long && (
                        <MapboxMapTile
                            long={long}
                            lat={lat}
                            zoom={difficulty.tileZoom}
                        />
                    )}
                    <Scoreboard
                        distance={distance}
                        guesses={guesses}
                        difficulty={difficulty}
                    />
                    <Timer
                        targetDate={timer}
                        answer={answer}
                        guesses={guesses}
                    />
                    {long && (
                        <LeafletMap
                            distance={distance}
                            setDistance={setDistance}
                            long={long}
                            lat={lat}
                            difficulty={difficulty}
                            guesses={guesses}
                            setGuesses={setGuesses}
                            answer={answer}
                            setAnswer={setAnswer}
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
                <SettingsModal
                    showModal={showModal}
                    toggleModal={toggleModal}
                    changeTileZoom={changeTileZoom}
                    difficulty={difficulty}
                />
            </div>
        </>
    );
}

export default App;
