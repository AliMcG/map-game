import Map from "react-map-gl";
import "./App.css";
import {
    MapContainer,
    TileLayer,
    useMapEvents,
    Popup,
    Marker,
} from "react-leaflet";
import { useState, useEffect } from "react";
// import L from "leaflet"

function App() {
    const staticMapApi = process.env.REACT_APP_MAP_KEY;
    const [long, setLong] = useState();
    const [lat, setLat] = useState();
    const [guessLat, setGuessLat] = useState();
    const [guessLong, setGuessLong] = useState();
    const [distance, setDistance] = useState(0);
    const [answer, setAnswer] = useState("");

    function LocationMarker() {
        // const [position, setPosition] = useState(null);
        const map = useMapEvents({
            click(e) {
                // setPosition(e.latlng);
                console.log(e.latlng);
                setGuessLat(e.latlng.lat);
                setGuessLong(e.latlng.lng);
                calcCrow(lat, long, guessLat, guessLong);
            },
        });
    }

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
    //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    function calcCrow(lat1, lon1, lat2, lon2) {
        console.log("True Lat/Long: ", lat1, lon1);
        console.log("Guess Lat/Long: ", lat2, lon2);
        var R = 6371; // km
        var dLat = toRad(lat2 - lat1);
        var dLon = toRad(lon2 - lon1);
        var latTrue = toRad(lat1);
        var latGuess = toRad(lat2);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) *
                Math.sin(dLon / 2) *
                Math.cos(latTrue) *
                Math.cos(latGuess);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        console.log("long1: ", lon1, "Lon2: ", lon2);
        console.log("distance: ", d);
        setDistance(d.toFixed(1));
        if (d < 100) {
            setAnswer(true);
        }
    }

    // Converts numeric degrees to radians
    function toRad(Value) {
        return (Value * Math.PI) / 180;
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
                    <MapContainer
                        id="map"
                        center={[0, 0]}
                        zoom={3}
                        scrollWheelZoom={true}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {answer && (
                            <Marker position={[lat, long]}>
                                <Popup>This is the correct answer!</Popup>
                            </Marker>
                        )}
                        <LocationMarker />
                    </MapContainer>
                )}
            </div>
        </>
    );
}

export default App;
