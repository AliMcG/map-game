import "./Scoreboard.css";
// import MemoCountdown from '../Timer/ReactCountDownTimer.js'

export default function Scoreboard({ distance, guesses, answer, difficulty, dif }) {
    // console.log("diffuculty score", difficulty)
    return (
        <div className="scoreboard">
            <h2>Scoreboard</h2>
            <p>Distance: {distance}</p>
            <p>Guesses: {guesses}</p>
            {answer || guesses >= 10?
            <p>Score: {1100 - guesses * dif }</p>: null}
            {/* <MemoCountdown answer={answer}/> */}
        </div>
    );
}
