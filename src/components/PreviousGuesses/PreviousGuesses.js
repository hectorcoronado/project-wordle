import React from "react";

import Guess from "../Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function PreviousGuesses({ answer, previousGuesses }) {
  let ALL_GUESSES;

  const EMPTY_SPANS = NUM_OF_GUESSES_ALLOWED - previousGuesses.length;

  ALL_GUESSES = previousGuesses.map((g) => {
    const { key, guess } = g;
    return (
      <p className="guess" key={key}>
        <Guess answer={answer} previousGuess={guess} />
      </p>
    );
  });

  if (EMPTY_SPANS) {
    const blanks = range(EMPTY_SPANS).map((_, i) => (
      <p className="guess" key={i}>
        <Guess />
      </p>
    ));

    ALL_GUESSES = [...ALL_GUESSES, blanks];
  }

  return <div className="guess-results">{ALL_GUESSES}</div>;
}

export default PreviousGuesses;
