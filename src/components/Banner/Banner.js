import React from "react";

function Happy({ previousGuesses }) {
  const numOfGuesses = previousGuesses.length;

  return (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{numOfGuesses} guesses</strong>.
    </p>
  );
}

function Sad({ answer }) {
  return (
    <p>
      Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>
    </p>
  );
}

function Banner({ answer, gameStatus, handleResetGame, previousGuesses }) {
  const statusClassName =
    gameStatus === "won" ? "happy" : gameStatus === "lost" ? "sad" : null;

  if (statusClassName) {
    return (
      <div className={`${statusClassName} banner`}>
        {statusClassName === "happy" && (
          <Happy previousGuesses={previousGuesses} />
        )}
        {statusClassName === "sad" && <Sad answer={answer} />}
        <button className="restart-btn" onClick={handleResetGame}>
          Start Over!
        </button>
      </div>
    );
  }

  return null;
}

export default Banner;
