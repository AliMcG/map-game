import { useState } from "react";

//Default settings defined here
export default function useSettings() {
    const [difficulty, setDifficulty] = useState({
        minDistance: 100,
        timeLimit: 300,
        tileZoom: 8,
        maxGuesses:10,
        //Future options: Road names/ country names on, 
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
    function changeMaxGuesses(newMaxGuesses) {
        setDifficulty({...difficulty, maxGuesses: newMaxGuesses });
        console.log("maxGuesses changed to :", newMaxGuesses);
    }
    return {
        difficulty,
        changeMaxGuesses,
        changeMinDistance,
        changeTimeLimit,
        changeTileZoom,
    };
}
// export default useSettings
