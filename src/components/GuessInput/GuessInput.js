import { useState } from "react";

function GuessInput({
  gameStatus,
  guess,
  handleSetGuess,
  handlePreviousGuess,
}) {
  const isDisabledInput = !!gameStatus;

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // set previous guess so that user can see it above input
    handlePreviousGuess(guess);

    handleSetGuess("");
  };

  const handleOnChange = (e) => {
    e.preventDefault();

    const nextGuess = e.target.value.toUpperCase();

    handleSetGuess(nextGuess);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        onChange={handleOnChange}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5-letter word"
        type="text"
        value={guess}
        disabled={isDisabledInput}
        required
      />
    </form>
  );
}

export default GuessInput;
