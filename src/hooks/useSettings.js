import { useState } from "react";

//Default settings defined here
export default function useSettings() {
    const [difficulty, setDifficulty] = useState({
        minDistance: 100,
        timeLimit: 5,
        tileZoom: 8,
    });
    function changeMinDistance(newDistance) {
        setDifficulty({ ...difficulty, minDistance: newDistance });
        console.log("minDistance changed to :", newDistance);
    }
    function changeTimeLimit(newTimeLimit) {
        setDifficulty({ ...difficulty, timeLimit: newTimeLimit });
        console.log("timeLimit changed to :", newTimeLimit);
    }
    function changeTileZoom(newTileZoom) {
        setDifficulty({ ...difficulty, tileZoom: newTileZoom });
        console.log("tileZoom changed to :", newTileZoom);
    }
    return {
        difficulty,
        changeMinDistance,
        changeTimeLimit,
        changeTileZoom,
    };
}
// export default useSettings
