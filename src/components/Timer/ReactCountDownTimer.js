import React from "react";
import Countdown from "react-countdown";
// import { useScore } from "../../hooks/useScore";
import {FinalScore} from "../Timer/Timer.js"

const CountdownWrapper = ({answer}) => {
  const Completionist = () => <span>You are out of Time!</span>;
  
  // Renderer callback with condition
  const renderer = ({ minutes, seconds, completed }) => {
    
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else if (answer.answer) {
      return <FinalScore minutes={minutes} seconds={seconds} guesses={answer.totalGuesses}/>
    }
    
    else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  return <Countdown date={Date.now() + 300000} renderer={renderer}/>;
};

const MemoCountdown = React.memo(CountdownWrapper);

export default MemoCountdown;
