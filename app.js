const Grid = document.querySelector('.grid');
let squares = Array.from(document.querySelectorAll('.grid div'));
const Width = 10;
const ScoreDisplay = document.querySelector('#score');
const StartButton = document.querySelector('#start-button');

// Tetrominoes
const oTetrimino = [0, 1, width, width + 1];

const iTetrimino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
]

const jTetrimino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [2, width + 2, width * 2 + 2, width * 2 + 1],
    [width + 1, width * 2 + 1, width * 2 + 2, width * 2 + 3]
]

const lTetrimino = [
    [1, 2, width + 2, width * 2 + 2],
    [width + 1, width + 2, width + 3, width * 2 + 1],
    [1, width + 1, width * 2 + 1, width * 2 + 2],
    [width * 2, width * 2 + 1, width * 2 + 2, width + 2]
]

const zTetrimino = [
    [0, 1, width + 1, width + 2],
    [3, width + 1, width + 2, width * 2 + 1],
]

const sTetrimino = [
    [1, 2, width, width + 1],
    [1, width + 1, width + 2, width * 2 + 2],
]

const tTetrimino = [
    [0, 1, 2, width + 1],
    [width + 1, 2, width + 2, width * 2 + 2],
    [1, width, width + 1, width + 2],
    [1, width + 1, width * 2 + 1, width + 2],
]