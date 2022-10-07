// import { MapboxMap } from "react-map-gl"; unnecessary
import "./MapboxMap.css";
function MapboxMapTile({ long, lat, zoom }) {
    const staticMapApi = process.env.REACT_APP_MAP_KEY;
    console.log("zoom: ",zoom)
    return (
        <>
        {/* <div className="mapbox-tile-container"> */}
            <img
                className="map-tile" id ="tile"
                src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${long},${lat},${zoom}},0/300x300?access_token=${staticMapApi}`}
                alt="map"
            />
       {/*  </div> */}</>
    );
}
export default MapboxMapTile;
