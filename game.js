var board = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
]

const min = 0
const max = 2

function getBoard () { return board }

function setBoardValue (location, type) { board[location[0]][location[1]] = type }


function validateInput(data) {
    var array = data.trim().split('')
    var x = parseInt(array[0])
    var y = parseInt(array[2])
    if (array.length === 3 &&
        (x >= min && x <= max) &&
        (y >= min && y <= max) &&
        checkTile(x, y)) {
        
        return [parseInt(x),parseInt(y)]
    } else {
        return []
    }
}

function checkTile (x, y) {
    if (board[x][y] === 'X' || board[x][y] === 'O') {
        return false
    } else {
        return true
    }
}

function playerQuestion (player) {
    return player.name + ' (' + player.type + ') ' + 'where would you like to move?'
}

function printBoard () {
    console.log(board.join('\n'))
}
function checkWinner(type) {
    // checkHorizontal(type)
}
function checkHorizontal (type) {
    var win = false
    board.reduce(function(prev, hori) {
        prev = hori.reduce(function(count, element) {
            if (element === type) { count++ }
            return count
        }, 0)
        if (prev === 3) { win = true }
        return prev
    }, 0)
    console.log('var win: ', win)
    return win
}
function resetBoard () {
    board = [
        ['-','-','-'],
        ['-','-','-'],
        ['-','-','-']
    ]
}

module.exports = {
    getBoard,
    setBoardValue,
    validateInput,
    playerQuestion,
    printBoard,
    resetBoard,
    checkHorizontal
}