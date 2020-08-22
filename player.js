const player1 = {
    name: 'Player1',
    type: 'X'
}
const player2 = {
    name: 'Player2',
    type: 'O'
}

function initialPlayer () {
    if (0 === Math.floor(Math.random() * Math.floor(2))) {
        return player2
    } else {
        return player1
    }
}

function switchPlayer(type) {
    if (type === 'X') {
        return player2
    } else {
        return player1
    }
}

module.exports = {
    switchPlayer,
    initialPlayer
}