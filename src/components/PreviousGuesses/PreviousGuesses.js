import React from "react";

function PreviousGuesses({ previousGuesses }) {
  const ALL_GUESSES = previousGuesses.map((g) => {
    const { key, guess } = g;
    return (
      <p className="guess" key={key}>
        {guess}
      </p>
    );
  });
  return <div className="guess-results">{ALL_GUESSES}</div>;
}

export default PreviousGuesses;
