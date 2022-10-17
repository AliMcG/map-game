import { useEffect, useState } from "react";
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
            score: 126,
            city: Arkhangelsk,
            time(s): 95,
            guesses: 11,
            date: time.Now(),
        },
    ]
    */
    const [localHighScores, setLocalHighScores] = useState(() => {
        let scores = localStorage.getItem("localHighScores");
        return scores == null ? [] : JSON.parse(scores);
    });
    useEffect(() => {
        localStorage.setItem(
            "localHighScores",
            JSON.stringify(
                localHighScores.sort((a, b) => {
                    return b.score - a.score;
                })
            )
        );
    }, [localHighScores]);

    //Replace lowest score ?
    /* function replaceLowestScore(newScoreObject) {
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
    } */
    return {
        localHighScores,
    };
}
