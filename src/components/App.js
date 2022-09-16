import Map from 'react-map-gl';
import './App.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
// import L from "leaflet"

function App() {
  const position = [51.505, -0.09];
  // var map = L.map("map", {
  //     center: [51.505, -0.09],
  //     zoom: 13,
  // });
  return (
    <>
      <div className='App'>
        <Map
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          }}
          style={{ width: 600, height: 400 }}
          mapStyle='mapbox://styles/mapbox/streets-v9'
          mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
        />
        {/* </div> */}
        {/* <div id='map'> */}
        <MapContainer
          id='map'
          center={position}
          zoom={14}
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
      </div>
    </>
  );
}

export default App;
