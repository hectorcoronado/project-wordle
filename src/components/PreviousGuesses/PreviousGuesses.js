import Guess from "../Guess/Guess";

function PreviousGuesses({previousGuesses}) {
  return (
    <div className="guess-results">
      <Guess previousGuesses={previousGuesses} />
    </div>
  );
}

export default PreviousGuesses;
