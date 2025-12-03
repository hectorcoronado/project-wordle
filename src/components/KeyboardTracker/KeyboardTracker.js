import React, { useEffect, useState } from "react";
import { ALL_CHARACTERS } from "../../constants";
import { checkGuess } from "../../game-helpers";

function KeyboardTracker({ answer, previousGuesses }) {
  const [allCharsStatus, setAllCharsStatus] = useState(ALL_CHARACTERS);
  const { topRow, midRow, bottomRow } = allCharsStatus;

  useEffect(() => {
    const lastGuess = previousGuesses.length ? previousGuesses.at(-1) : null;

    if (!lastGuess) return;

    const checkedGuess = checkGuess(lastGuess, answer);

    let nextCharsObject = { ...allCharsStatus };
    console.log("nextCharsObject:", nextCharsObject);

    // start by looking through each row in nextCharsObject (i.e. "topRow" for letters QWERTY to P)
    for (const row in nextCharsObject) {
      // iterate over that row's characters
      for (let i = 0; i < nextCharsObject[row].length; i++) {
        // as well as through the characters we got from `checkGuess()`
        for (let j = 0; j < checkedGuess.length; j++) {
          const nextCharsObjectLetter =
            nextCharsObject[row][i].letter.toUpperCase();
          const answerLetter = checkedGuess[j].letter;

          // if the current row's letter matches the current answer letter, we need to overwrite that so we get the right "status"
          if (nextCharsObjectLetter === answerLetter) {
            nextCharsObject[row][i] = checkedGuess[j];
          } else continue;
        }
      }
    }

    setAllCharsStatus(nextCharsObject);
  }, [previousGuesses]);

  return (
    <div>
      <div className="keyboard">
        <div className="keyboard-row">
          {topRow.map((char) => (
            <span
              className={`key${char.status ? ` ${char.status}` : ""}`}
              key={char.letter}
            >
              {char.letter}
            </span>
          ))}
        </div>
        <div className="keyboard-row">
          {midRow.map((char) => (
            <span
              className={`key${char.status ? ` ${char.status}` : ""}`}
              key={char.letter}
            >
              {char.letter}
            </span>
          ))}
        </div>
        <div className="keyboard-row">
          {bottomRow.map((char) => (
            <span
              className={`key${char.status ? ` ${char.status}` : ""}`}
              key={char.letter}
            >
              {char.letter}
            </span>
          ))}
        </div>
      </div>
      <section className="keyboard-legend">
        <p>This is to help you track which letters:</p>
        <ul>
          <li>are not in the mystery word (dark grey),</li>
          <li>are in the word & correctly placed (green),</li>
          <li>are in the word, but misplaced (yellow), and</li>
          <li>not yet used (light grey)</li>
        </ul>
      </section>
    </div>
  );
}

export default KeyboardTracker;
