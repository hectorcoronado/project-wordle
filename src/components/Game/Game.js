import { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { ALL_CHARACTERS } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import Banner from "../Banner/Banner";
import KeyboardTracker from "../KeyboardTracker/KeyboardTracker";

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [guess, setGuess] = useState("");
  const [allCharsStatus, setAllCharsStatus] = useState(ALL_CHARACTERS);

  //   console.log("allCharsStatus:", allCharsStatus);

  // To make debugging easier, we can uncomment this log to see the solution in the console.
  // console.info({ answer });

  const handlePreviousGuess = (guess) =>
    setPreviousGuesses([...previousGuesses, guess]);

  const handleUpdateAllCharsStatus = (nextChars) =>
    setAllCharsStatus(nextChars);

  const handleSetGuess = (nextGuess) => setGuess(nextGuess);

  const handleResetGame = () => {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setPreviousGuesses([]);
    setGuess("");
    setAllCharsStatus(ALL_CHARACTERS);
  };

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
        guess={guess}
        handleSetGuess={handleSetGuess}
        handlePreviousGuess={handlePreviousGuess}
      />
      <Banner
        answer={answer}
        gameStatus={gameStatus}
        handleResetGame={handleResetGame}
        previousGuesses={previousGuesses}
      />
      <KeyboardTracker
        allCharsStatus={allCharsStatus}
        answer={answer}
        handleUpdateAllCharsStatus={handleUpdateAllCharsStatus}
        previousGuesses={previousGuesses}
      />
    </>
  );
}

export default Game;
