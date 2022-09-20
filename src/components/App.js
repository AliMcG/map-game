//import Map from "react-map-gl";
import "./App.css";
/* import {
    MapContainer,
    TileLayer,
    useMapEvents,
    Popup,
    Marker,
} from "react-leaflet"; */
import { useState, useEffect } from "react";
import LeafletMap from "./LeafletMap/LeafletMap";
// import L from "leaflet"

function App() {
    const staticMapApi = process.env.REACT_APP_MAP_KEY;
    const [long, setLong] = useState();
    const [lat, setLat] = useState();
    const [distance, setDistance] = useState();
    const [difficulty, setDifficulty] = useState({minDistance:100})
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
        // console.log(response);
        // const data = await response.json();
        // console.log(data);
        // setLat(data.major.latt);
        // setLong(data.major.longt);
        setLat(50.71344);
        setLong(-3.5444);
        // setPosition([data.major.latt, data.major.longt]);
    }
    return (
        <>
            <div className="App">
                {long && (
                    <img
                        className="map-tile"
                        src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${long},${lat},8,0/300x300?access_token=${staticMapApi}`}
                        alt="map"
                    />
                )}
                <h1>
                    Lat: {lat}, Long: {long}
                </h1>
                <h2>Distance: {distance}</h2>
                {long && (
                    <LeafletMap distance = {distance} setDistance={setDistance} long={long} lat={lat} difficulty={difficulty}/>
                )}
            </div>
        </>
    );
}

export default App;
