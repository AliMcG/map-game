import "./Scoreboard.css";
import MemoCountdown from '../Timer/ReactCountDownTimer.js'

export default function Scoreboard({ distance, guesses }) {
    return (
        <div className="scoreboard">
            <h2>Scoreboard</h2>
            <p>Distance: {distance}</p>
            <p>Guesses: {guesses}</p>
            <MemoCountdown />
        </div>
    );
}
