import { useEffect, useState } from "react";

// Explanation of using a custom hook from this blog: https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks

const useCountdown = (targetDate, answer) => {
  // gets the time object from the props.targetDate
  const countDownDate = new Date(targetDate).getTime();

  // sets the initial state of countDown to targetDate - current time
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  // To use setInterval in React put it inside useEffect.
  // clearInterval(a variable name) clears the memory load
  // !answer stops the interval function when the answer state is true
  useEffect(() => {
    if (!answer) {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
      return () => clearInterval(interval);
    }
    
  }, [countDownDate, answer]);

  return getReturnValues(countDown);
};

// This calculation comes from https://www.w3schools.com/howto/howto_js_countdown.asp
//
const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  // console.log(days, hours, minutes, seconds);
  return [days, hours, minutes, seconds];
};

export { useCountdown };
