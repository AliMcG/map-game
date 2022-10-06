import React from "react";
import Countdown from "react-countdown";
// import { useScore } from "../../hooks/useScore";

const OutOfTime = () => {
  return (
    <div className="expired-notice">
      <span>Out of Time!</span>
      <p>Please click the map to reset timer and play again.</p>
    </div>
  );}

  // const FinalScore = ({ minutes, seconds, guesses }) => {
  //   const finalTime = useScore(minutes, seconds, guesses);
  //   return <h3>You got it! Your score is: {finalTime} points.</h3>;
  // };

const CountdownWrapper = () => {
  
  
  // Renderer callback with condition
  const renderer = ({ minutes, seconds, completed }) => {
    
    if (completed) {
      // Render a completed state
      return <OutOfTime />;
    } else {
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
