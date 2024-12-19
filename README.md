# Triple Triad HTML
Triple Triad created in HTML, Javascript, and CSS. Two AIs will play against each other following the basic rules of Triple Triad. Made to be used with the [MixItUp Streaming Bot](https://mixitupapp.com/). It uses the api from [FFXIV Collect](https://ffxivcollect.com/) to get card data.

# Javascript Commands
## StartGame()
Clears the board if any cards are on the field and gives each AI five random cards.

## NextMove()
Causes the next turn to be taken by whichever AI's turn it is.

## GetWinner()
At the end of the game, this can be ran to push the winner (red or blue) into a cookie. This then can be retreived in MixItUp.
