import { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [ previousGuesses, setPreviousGuesses ] = useState([]);  

  const handlePreviousGuess = (guess) => setPreviousGuesses([...previousGuesses, guess]);

  return (
    <>
      <PreviousGuesses previousGuesses={previousGuesses} />
      <GuessInput handlePreviousGuess={handlePreviousGuess} />
    </>
  );
}

export default Game;
