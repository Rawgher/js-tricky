function guessingGame() {
    const secretNum = Math.floor(Math.random() * 100);
    let isOver = false;
    let attempts = 0;

    return function (guess) {
        if (isOver) {
            return 'The game is over, you already won!'
        }

        attempts++;

        if (guess === secretNum) {
            isOver = true;
            return `You win! You found ${secretNum} in ${attempts} guesses.`;
        } else if (guess < secretNum) {
            return `${guess} is too low!`
        } else if (guess > secretNum) {
            return `${guess} is too high!`
        }
    }
}

module.exports = { guessingGame };
