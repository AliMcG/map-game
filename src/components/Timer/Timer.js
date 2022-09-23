import { useCountdown } from "../../hooks/useCountDown";
import { useScore } from "../../hooks/useScore";

// functionless component to display "out of time" message. This could moved to a new component
// If it needs to handle some function
const OutOfTime = () => {
  return (
    <div className="expired-notice">
      <span>Out of Time!</span>
      <p>Please click the map to reset timer and play again.</p>
    </div>
  );
};
// functionless component to display countDown message
const CountDown = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-timer">
      <p>
        Time left = {minutes}:{seconds}
      </p>
    </div>
  );
};

// calculates the final score based on time taken / number of guesses
const FinalScore = ({ minutes, seconds, guesses }) => {
  const finalTime = useScore(minutes, seconds, guesses);
  return <h1>You got it! Your score is: {finalTime} points.</h1>;
};

const Timer = ({ targetDate, answer, guesses }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate, answer);

  if (days + hours + minutes + seconds <= 0) {
    return <OutOfTime />;
  } else if (answer) {
    console.log("minutes in Timer: ", minutes);
    return <FinalScore minutes={minutes} seconds={seconds} guesses={guesses} />;
  } else {
    return <CountDown minutes={minutes} seconds={seconds} />;
  }
};

export default Timer;
