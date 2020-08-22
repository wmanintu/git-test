//var modLog = require('./log')
var board = require('./game')
var player = require('./player')

/////INITIATE QUESTION
var currentPlayer = player.initialPlayer()
console.log("Welcome this is your board:")
board.printBoard()
console.log(board.playerQuestion(currentPlayer))
/////
// TODO : 
process.stdin.on('data', (input) => {
    // VALIDATE
    var location = board.validateInput(input.toString())

    if (location.length === 2) {
        board.setBoardValue(location, currentPlayer.type) // END TURN
        //CHECK WINNER
        console.log('win hori?', board.checkHorizontal(currentPlayer.type))
        if (board.checkHorizontal(currentPlayer.type)) {
            //WINNER!
            console.log(currentPlayer.name + ' WINS!')
            board.resetBoard()
        }
        ///////////////
        currentPlayer = player.switchPlayer(currentPlayer.type) // BEGINS TURN
        console.log(board.playerQuestion(currentPlayer))
        board.printBoard()

    } else { // INVALID MESSAGE HERE
        console.log('Invalid Input. Pls try again')
    }

})

process.stdin.on('end', () => {
    console.log('end')
})