import React from "react";
import { range } from "../../utils";

function Guess({ previousGuess = "" }) {
  let spans;

  if (previousGuess) {
    const splitGuess = previousGuess.split("");
    spans = splitGuess.map((char, idx) => (
      <span key={idx} className="cell">
        {char}
      </span>
    ));
  } else {
    spans = range(5).map((_, idx) => <span key={idx} className="cell"></span>);
  }

  return spans;
}

export default Guess;
