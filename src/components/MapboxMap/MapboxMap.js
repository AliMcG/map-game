// import { MapboxMap } from "react-map-gl"; unnecessary
import "./MapboxMap.css";
function MapboxMapTile({ long, lat }) {
    const staticMapApi = process.env.REACT_APP_MAP_KEY;
    return (
        <img
            className="map-tile"
            src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${long},${lat},8,0/300x300?access_token=${staticMapApi}`}
            alt="map"
        />
    );
}
export default MapboxMapTile;
