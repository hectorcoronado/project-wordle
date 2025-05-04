import React, { useState } from "react";

function GuessInput({ previousGuesses, setPreviousGuesses }) {
  const [guess, setGuess] = useState("");

  const handleChange = (e) => {
    const UPPERCASED_GUESS = e.target.value.toUpperCase();
    setGuess(UPPERCASED_GUESS);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = crypto.randomUUID();

    console.log({ guess });
    const NEXT_PREVIOUS_GUESSES = [...previousGuesses, { key, guess }];
    setPreviousGuesses(NEXT_PREVIOUS_GUESSES);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => handleChange(e)}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word" // hints the user if invalid input!
        required
      ></input>
    </form>
  );
}

export default GuessInput;
