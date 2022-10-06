import { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Popup,
  Marker,
} from 'react-leaflet';
import './LeafletMap.css';

function LeafletMap({
  distance,
  setDistance,
  long,
  lat,
  difficulty,
  guesses,
  setGuesses,
  answer,
  setAnswer,
}) {
  //   const [guessLat, setGuessLat] = useState();
  //   const [guessLong, setGuessLong] = useState();
  const [guess1, setGuess1] = useState();
  const [guess2, setGuess2] = useState();
  const [guess3, setGuess3] = useState();
  const [guess4, setGuess4] = useState();
  const [guess5, setGuess5] = useState();

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        // setGuessLat(e.latlng.lat);
        // setGuessLong(e.latlng.lng);
        // calcCrow(lat, long, guessLat, guessLong);
        calcCrow(lat, long, e.latlng.lat, e.latlng.lng);
        setGuesses((prev) => prev + 1);
        if (guesses === 0) {
          setGuess1([e.latlng.lat, e.latlng.lng]);
        } else if (guesses === 1) {
          setGuess2([e.latlng.lat, e.latlng.lng]);
        } else if (guesses === 2) {
          setGuess3([e.latlng.lat, e.latlng.lng]);
        } else if (guesses === 3) {
          setGuess4([e.latlng.lat, e.latlng.lng]);
        } else if (guesses === 4) {
          setGuess5([e.latlng.lat, e.latlng.lng]);
        }
      },
    });
  }
  function calcCrow(lat1, lon1, lat2, lon2) {
    //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    // console.log('True Lat/Long: ', lat1, lon1);
    // console.log('Guess Lat/Long: ', lat2, lon2);
    var R = 6371; // km

    function toRad(Value) {
      // Converts numeric degrees to radians
      return (Value * Math.PI) / 180;
    }
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
    // console.log('long1: ', lon1, 'Lon2: ', lon2);
    // console.log('distance: ', d);
    setDistance(d.toFixed(1));
    if (d < 100) {
      setAnswer(true);
    }
  }
  useEffect(() => {
    checkDistance(difficulty.minDistance);
  }, []);
  function checkDistance(minRequiredDistance) {
    if (distance < minRequiredDistance) {
      setAnswer(true);
    }
  }
  return (
    <MapContainer
      className='leaflet-map'
      id='map'
      center={[0, 0]}
      zoom={3}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {answer && (
        <Marker position={[lat, long]}>
          <Popup>This is the correct answer!</Popup>
        </Marker>
      )}
      {guess1 && (
        <Marker position={guess1} Popup={true}>
          <Popup>Guess 1</Popup>
        </Marker>
      )}
      {guess2 && (
        <Marker position={guess2}>
          <Popup>Guess 2</Popup>
        </Marker>
      )}
      {guess3 && (
        <Marker position={guess3}>
          <Popup>Guess 3</Popup>
        </Marker>
      )}
      {guess4 && (
        <Marker position={guess4}>
          <Popup>Guess 4</Popup>
        </Marker>
      )}
      {guess5 && (
        <Marker position={guess5}>
          <Popup>Guess 5</Popup>
        </Marker>
      )}

      <LocationMarker />
    </MapContainer>
  );
}
export default LeafletMap;
