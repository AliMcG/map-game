import "./Scoreboard.css";
export default function Scoreboard({ distance, guesses }) {
    return (
        <div className="scoreboard">
            <h2>Scoreboard: </h2>
            <p>Distance: {distance}</p>
            <p>Guesses: {guesses}</p>
        </div>
    );
}
