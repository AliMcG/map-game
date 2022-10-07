import {
    MapContainer,
    TileLayer,
    useMapEvents,
    Popup,
    Marker,
} from "react-leaflet";
import "./LeafletMap.css";

function LeafletMap({
    setDistance,
    long,
    lat,
    difficulty,
    answer,
    setAnswer,
    testGuesses,
    setTestGuesses,
}) {
    function LocationMarker() {
        useMapEvents({
            click(e) {
                calcCrow(lat, long, e.latlng.lat, e.latlng.lng);
                setTestGuesses([...testGuesses, [e.latlng.lat, e.latlng.lng]]);
            },
        });
    }
    function calcCrow(lat1, lon1, lat2, lon2) {
        //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
        console.log("True Lat/Long: ", lat1, lon1);
        console.log("Guess Lat/Long: ", lat2, lon2);
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
        console.log("distance: ", d);
        setDistance(d.toFixed(1));
        if (d < difficulty.minDistance) {
            setAnswer(true);
        }
        return d.toFixed(1);
    }
    return (
        <MapContainer
            className="leaflet-map"
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
            {testGuesses.map((guess, index) => {
                return (
                    <Marker position={guess} Popup={true}>
                        <Popup>{`Guess ${index + 1}:\n ${calcCrow(
                            lat,
                            long,
                            guess[0],
                            guess[1]
                        )} km `}</Popup>
                    </Marker>
                );
            })}
            <LocationMarker />
        </MapContainer>
    );
}
export default LeafletMap;
