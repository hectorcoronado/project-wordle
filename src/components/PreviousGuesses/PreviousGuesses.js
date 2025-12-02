import Guess from "../Guess/Guess";

function PreviousGuesses({answer, previousGuesses}) {
  return (
    <div className="guess-results">
      <Guess answer={answer} previousGuesses={previousGuesses} />
    </div>
  );
}

export default PreviousGuesses;
