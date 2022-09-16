import Map from 'react-map-gl';
import './App.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';
// import L from "leaflet"

function App() {
  const waterApi = process.env.REACT_APP_ONWATER_API_KEY;
  const [long, setLong] = useState();
  const [lat, setLat] = useState();
  // console.log(long)
  // console.log(long)
  // console.log(lat)
  const [position, setPosition] = useState([0, 0]);
  console.log('position', position);
  //   const position = [51.505, -0.09];

  //   useEffect(() => {
  //     async function getRandomCoords() {
  //       const response = await fetch(`https://api.3geonames.org/?randomland=yes`);
  //       const data = await response.json();
  //       console.log(data);
  //   if (!data?.water) {
  // setLong(ranLong);
  // setLat(ranLat);

  //   }
  // }
  // getRandomCoords();
  // async function getRandomCoords() {
  //   const ranLong = (Math.random() * (180 - -180) + -180).toFixed(5);
  //   const ranLat = (Math.random() * (90 - -90) + -90).toFixed(5);
  //   console.log(ranLat);
  //   const response = await fetch(
  //     `https://api.onwater.io/api/v1/results/${ranLat},${ranLong}?access_token=${waterApi}`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   if (!data?.water) {
  //     setLong(ranLong);
  //     setLat(ranLat);
  //     console.log(ranLat);
  //   } else {
  //     getRandomCoords();
  //   }
  // }
  // getRandomCoords();
  //   }, []);

  // var map = L.map("map", {
  //     center: [51.505, -0.09],
  //     zoom: 13,
  // });

  useEffect(() => {
    getRandomCoords();
  }, []);
  async function getRandomCoords() {
    const url = 'https://api.3geonames.org/?randomland=yes&json=1';
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
      <div className='App'>
        {long && (
          <Map
            initialViewState={{
              longitude: long,
              latitude: lat,
              zoom: 8,
            }}
            style={{ width: 300, height: 300 }}
            mapStyle='mapbox://styles/mapbox/streets-v9'
            mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
          />
        )}
        <h1>
          Lat: {lat}, Long: {long}
        </h1>
        {/* </div> */}
        {/* <div id='map'> */}
        {long && (
          <MapContainer
            id='map'
            center={position}
            zoom={2}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {/*                     <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker> */}
          </MapContainer>
        )}
      </div>
    </>
  );
}

export default App;
