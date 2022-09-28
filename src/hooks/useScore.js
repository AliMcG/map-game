// moved this function out of Timer.js to stop using the state.

const useScore = (mins, secs, guesses) => {
  const totalTime = (secs * 1000 + mins * 60000) / guesses / 1000;
  return totalTime.toFixed(2);
};

export { useScore };
