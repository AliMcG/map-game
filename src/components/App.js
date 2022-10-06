import './App.css';
import { useState, useEffect } from 'react';
import LeafletMap from './LeafletMap/LeafletMap.js';
import MapboxMapTile from './MapboxMap/MapboxMap.js';
import Instructions from './Instructions/Instructions.js';
import Scoreboard from './Scoreboard/Scoreboard.js';
import useSettingsModal from '../hooks/useSettingsModal';
import SettingsModal from './SettingsModal/SettingsModal';
import MemoTimer from './Timer/Timer';
// import MemoCountdown from './Timer/ReactCountDownTimer';



function App() {
  // Sets a date time number for five minutes in future
  // Gets the time now and then adds to 2 numbers together to pass to the timer component
  const inFiveMinutes = 1 * 5 * 1 * 60 * 1000;
  const now = new Date().getTime();
  const timer = now + inFiveMinutes;

  const parser = new DOMParser()

  const [long, setLong] = useState();
  const [lat, setLat] = useState();
  const [distance, setDistance] = useState();
  const [difficulty /* setDifficulty */] = useState({ minDistance: 100 });
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
    // Sends a GET request to our Express.js server 
    //which in tern gets the random coords from this api: "https://api.3geonames.org/?randomland=yes&json=1"
    const response = await fetch(process.env.REACT_APP_RANDOM_COORDS_URL);
    const data = await response.json();
    
    // The data returns in XML format parser from DOMParser is a way to get inside the data object.
    // https://www.w3schools.com/xml/xml_parser.asp
    const newData = parser.parseFromString(data, "text/xml")
    
    const coords = newData.getElementsByTagName("major")
    // This is the path into the data
    // console.log(coords[0].children[1].innerHTML)
    setLat(coords[0].children[0].innerHTML);
    setLong(coords[0].children[1].innerHTML);
    
    // Hardcoded coordinates for Exeter, to help with testing or debugging.
    // setLat(50.71344);
    // setLong(-3.5444);
    
  }
  function handleReset() {
    setGuesses(0);
    setDistance(0);
    getRandomCoords();
  }
  return (
    <>
      <div className='App'>
        <div className='game-components'>
          {long && <MapboxMapTile long={long} lat={lat} />}
          <Scoreboard distance={distance} guesses={guesses} answer={answer}/>
          {/* <Timer targetDate={timer} answer={answer} guesses={guesses} /> */}
          {/* <MemoTimer targetDate={timer} answer={answer} guesses={guesses} /> */}
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
        <div className='lower-container'>
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
        <SettingsModal showModal={showModal} toggleModal={toggleModal} />
      </div>
    </>
  );
}

export default App;
