import React from "react";
import Countdown from "react-countdown";

const CountdownWrapper = () => {
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
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
