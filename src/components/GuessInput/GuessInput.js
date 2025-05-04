import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  const handleChange = (e) => {
    const UPPERCASED_GUESS = e.target.value.toUpperCase();
    setGuess(UPPERCASED_GUESS);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ guess });
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
