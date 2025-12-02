import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

/**
 * @param {Array} previousGuesses
 * @returns {JSX.Element}
 */

function Guess({ answer, previousGuesses }) {
	return (
		<>
			{range(NUM_OF_GUESSES_ALLOWED).map((_, idx) => {
				// get guess for current index, or set to null if there isn't one
				const guess = previousGuesses[idx] || null;
        // get status of each letter in the word (incorrect | correct | misplaced)
        let guessStatus = guess ? checkGuess(guess, answer) : null;

				const cells = guess
					? // if guess is not null, split guess into arr of letters & map over them to create spans
					  guess.split('').map((letter, i) => {
              const statusClassName = guessStatus[i].status;
              return(
                <span className={`cell ${statusClassName}`} key={`${letter}-${i}`}>
                  {letter}
                </span>
              )
            })
					: // if guess is null, create 5 empty spans
					  range(5).map((_, i) => <span className='cell' key={i}></span>);

				return (
					<p className='guess' key={idx}>
						{cells}
					</p>
				);
			})}
		</>
	);
}

export default Guess;
