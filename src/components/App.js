import "./App.css";
import { useState, useEffect } from "react";
import LeafletMap from "./LeafletMap/LeafletMap.js";
import MapboxMapTile from "./MapboxMap/MapboxMap.js";
import Instructions from "./Instructions/Instructions.js";
import Scoreboard from "./Scoreboard/Scoreboard.js";
function App() {
    const [long, setLong] = useState();
    const [lat, setLat] = useState();
    const [distance, setDistance] = useState();
    const [difficulty /* setDifficulty */] = useState({ minDistance: 100 });
    const [guesses, setGuesses] = useState(0);
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
                    {/* <h1>
                        Lat: {lat}, Long: {long}
                    </h1> */}
                    <Scoreboard distance={distance} guesses={guesses}/>
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
                <Instructions />
                <button
                    onClick={() => {
                        handleReset();
                    }}
                >
                    Reset
                </button>
            </div>
        </>
    );
}

export default App;
