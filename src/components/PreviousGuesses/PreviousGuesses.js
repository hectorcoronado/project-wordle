function PreviousGuesses({previousGuesses}) {
  return (<div className="guess-results">
    {previousGuesses.map(guess => <p className="guess" key={guess}>{guess}</p>)}
  </div>);
}

export default PreviousGuesses;
