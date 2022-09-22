import { useCountdown } from '../../hooks/useCountDown';
 /* 
 * show a 5 min timer - that starts countdown when game starts (this also reveals the map tile to guess)
 * time will stop if guess is correct and then either passes the time to a cal function or performs the cal itself.
 * Time / numGuesses = score (for example: 4:08 / 10 = 0.408)
 * setGuesses happens inside LocationMarker in LeafletMap.js. 
 */

 const OutOfTime = () => {
  return (
    <div className="expired-notice">
      <span>Out of Time!</span>
      <p>Please click the map to reset timer and play again.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-timer">
      
        {/* <p>days = {days}</p>
        <p>:</p>
        <p>hours = {hours}</p>
        <p>:</p> */}
        <p>Time left = {minutes}:{seconds}</p>
      
    </div>
  );
};



const Timer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  // console.log(targetDate)
  if (days + hours + minutes + seconds <= 0) {
    return <OutOfTime />;
  } else {
    return (
      <ShowCounter
        // days={days}
        // hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default Timer