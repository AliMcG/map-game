// import { MapboxMap } from "react-map-gl"; unnecessary
import "./MapboxMap.css";
function MapboxMapTile({ long, lat }) {
    const staticMapApi = process.env.REACT_APP_MAP_KEY;
    return (
        <>
        {/* <div className="mapbox-tile-container"> */}
            <img
                className="map-tile" id ="tile"
                src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${long},${lat},8,0/300x300?access_token=${staticMapApi}`}
                alt="map"
            />
       {/*  </div> */}</>
    );
}
export default MapboxMapTile;
