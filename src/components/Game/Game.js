import { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import Banner from "../Banner/Banner";
import KeyboardTracker from "../KeyboardTracker/KeyboardTracker";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = useState([]);

  const handlePreviousGuess = (guess) =>
    setPreviousGuesses([...previousGuesses, guess]);

  const lastGuess = previousGuesses.length ? previousGuesses.at(-1) : null;

  const gameStatus =
    // if last guess is the answer, set game status to won
    lastGuess && lastGuess === answer
      ? "won"
      : // if previous guesses are equal to the number of guesses allowed, set game status to lost
      previousGuesses.length === NUM_OF_GUESSES_ALLOWED
      ? "lost"
      : // if neither, set game status to null
        null;

  return (
    <>
      <PreviousGuesses
        answer={answer}
        gameStatus={gameStatus}
        previousGuesses={previousGuesses}
      />
      <GuessInput
        gameStatus={gameStatus}
        handlePreviousGuess={handlePreviousGuess}
      />
      <Banner
        answer={answer}
        gameStatus={gameStatus}
        previousGuesses={previousGuesses}
      />
      <KeyboardTracker answer={answer} previousGuesses={previousGuesses} />
    </>
  );
}

export default Game;
