import { useState } from "react";
import React from "react";

export default function useLocalScoreboard() {
    /* 
    Array of objects of each score entry, ex. 
    [
        {
            score: 222,
            city: Paris,
            time(s): 50,
            guesses: 7,
            date: time.Now(),
        },
        {
            score: 10,
            city: Arkhangelsk,
            time(s): 95,
            guesses: 11,
            date: time.Now(),
        },
    ]
    
    */
    function getScoreboard() {
        let localHighScores = JSON.parse(
            localStorage.getItem("localHighScores")
        );
        console.log("localHighScores:", localHighScores);
        return localHighScores;
    }
    function setScoreboard(newScoreObject) {
        localStorage.setItem(
            "localHighScores",
            JSON.stringify([...getScoreboard(), newScoreObject])
        );
    }

    //Replace lowest score ?
    function replaceLowestScore(newScoreObject) {
        let currentScoreboardSorted = JSON.parse(
            localStorage.getItem("localHighScores")
        ).sort((a, b) => {
            return b.score - a.score;
        });
        if (
            currentScoreboardSorted.length >= 20 &&
            newScoreObject.score >
                currentScoreboardSorted[currentScoreboardSorted.length - 1]
                    .score
        ) {
            currentScoreboardSorted[currentScoreboardSorted.length - 1] =
                newScoreObject;
        }
    }
    return { getScoreboard, setScoreboard, replaceLowestScore };
}
