import { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(guess);

    setGuess("");
  };

  const handleOnChange = (e) => {
    e.preventDefault();

    const nextGuess = e.target.value.toUpperCase();

    setGuess(nextGuess);
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
        required
      />
    </form>
  );
}

export default GuessInput;

/**
 *
 * This component should render a <form> tag, including a label and a text input.
 * <form class="guess-input-wrapper">
 *   <label for="guess-input">Enter guess:</label>
 *   <input id="guess-input" type="text" />
 * </form>
 *
 * The text input should be controlled by React state.
 *
 * When the form is submitted:
 *   - The entered value should be logged to the console (for now).
 *   - The input should be reset to an empty string.
 *   - The user's input should be converted to ALL UPPERCASE. No lower-case letters allowed.
 *   - The input should have a minimum and maximum length of 5.
 *   - NOTE: The minLength validator is a bit funky; you may wish to use the pattern attribute instead. This is discussed in more detail on the Solution page.
 */
