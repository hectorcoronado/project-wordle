import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, previousGuess = "" }) {
  let spans;

  if (previousGuess) {
    const checkedGuessResults = checkGuess(previousGuess, answer);
    console.log("** checkedGuessResults **", checkedGuessResults);
    spans = checkedGuessResults.map((result, idx) => {
      const { letter, status } = result;
      return (
        <span key={idx} className={`cell ${status}`}>
          {letter}
        </span>
      );
    });
  } else {
    spans = range(5).map((_, idx) => <span key={idx} className="cell"></span>);
  }

  return spans;
}

export default Guess;
