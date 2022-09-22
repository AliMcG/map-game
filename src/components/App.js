import "./App.css";
import { useState, useEffect } from "react";
import LeafletMap from "./LeafletMap/LeafletMap.js";
import MapboxMapTile from "./MapboxMap/MapboxMap.js";
import Timer from "./Timer/Timer";

function App() {
    // Sets a date time number for five minutes in future
    // Gets the time now and then adds to 2 numbers together to pass to the timer component
    const inFiveMinutes = 1 * 5 * 1 * 60 * 1000
    const now = new Date().getTime()
    const timer = now + inFiveMinutes

    const [long, setLong] = useState();
    const [lat, setLat] = useState();
    const [distance, setDistance] = useState();
    const [difficulty, /* setDifficulty */] = useState({ minDistance: 100 });
    const [guesses, setGuesses] = useState(0)
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
    function handleReset(){
        setGuesses(0)
        setDistance(0)
        getRandomCoords()

    }
    return (
        <>
            <div className="App">
                {long && <MapboxMapTile long={long} lat={lat} />}
                <h1>
                    Lat: {lat}, Long: {long}
                </h1>
                <h2>Distance: {distance}</h2>
                {long && (
                    <LeafletMap
                        distance={distance}
                        setDistance={setDistance}
                        long={long}
                        lat={lat}
                        difficulty={difficulty}
                        setGuesses = {setGuesses}
                    />
                )}
            </div>
            <h4>Guesses: {guesses}</h4>
            <button onClick={()=> {handleReset()}}>Reset</button>
            <Timer targetDate={timer}/>
        </>
    );
}

export default App;
