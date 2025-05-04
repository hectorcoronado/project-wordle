import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  const handleChange = (e) => {
    const UPPERCASED_GUESS = e.target.value.toUpperCase();
    setGuess(UPPERCASED_GUESS);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("** guess **", guess);
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
        pattern="\w{5,5}"
        required
      ></input>
    </form>
  );
}

export default GuessInput;
