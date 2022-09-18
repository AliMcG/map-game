import { useState, useEffect } from "react";
import {
    MapContainer,
    TileLayer,
    useMapEvents,
    Popup,
    Marker,
} from "react-leaflet";

function LeafletMap() {
    const [answer, setAnswer] = useState("");
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
    function toRad(Value) {
        return (Value * Math.PI) / 180;
    }
    return (
        <MapContainer id="map" center={[0, 0]} zoom={3} scrollWheelZoom={true}>
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
    );
}
export default LeafletMap;