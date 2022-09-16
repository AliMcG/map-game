import Map from "react-map-gl";
import "./App.css";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
// import L from "leaflet"

function App() {
  const staticMapApi = process.env.REACT_APP_MAP_KEY;
  const [long, setLong] = useState();
  const [lat, setLat] = useState();

  const [position, setPosition] = useState([0, 0]);
  console.log("position", position);

  useEffect(() => {
    getRandomCoords();
  }, []);
  async function getRandomCoords() {
    const url = "https://api.3geonames.org/?randomland=yes&json=1";
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    setLat(data.major.latt);
    setLong(data.major.longt);
    // setPosition([data.major.latt, data.major.longt]);
  }
  return (
    <>
      <div className="App">
        {long && (
          <img
            src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${long},${lat},8,0/300x300?access_token=${staticMapApi}`}
            alt="map"
          />
        )}
        {/* <Map
            initialViewState={{
              longitude: long,
              latitude: lat,
              zoom: 8,
            }}
            style={{ width: 300, height: 300 }}
            mapStyle='mapbox://styles/mapbox/streets-v9'
            mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
          /> */}

        <h1>
          Lat: {lat}, Long: {long}
        </h1>

        {long && (
          <MapContainer
            id="map"
            center={position}
            zoom={2}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </>
  );
}

export default App;
