import React, { useState } from "react";

import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = useState([]);
  return (
    <>
      <PreviousGuesses answer={answer} previousGuesses={previousGuesses} />
      <GuessInput
        previousGuesses={previousGuesses}
        setPreviousGuesses={setPreviousGuesses}
      />
    </>
  );
}

export default Game;
