import Map from 'react-map-gl';
import './App.css';

function App() {
  return (
    <div className="App">
     <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
    />
    </div>
  );
}

export default App;
