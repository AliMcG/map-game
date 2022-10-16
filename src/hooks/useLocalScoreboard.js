import { useState } from "react";
import React from "react";

export default function useLocalScoreboard() {
    function getScoreboard () {
        let localHighScores = JSON.parse(localStorage.getItem("localHighScores"))
        console.log("localHighScores:" ,localHighScores);
        return localHighScores
    }

    return getScoreboard
    
}
