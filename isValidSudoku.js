/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let len = board.length, i, j, k, row = [], col = [], block = [];

    for (i = 0; i < len; i++) {
        row[i] = {};
        col[i] = {};
        block[i] = {};
    }

    for (i = 0; i < len; i++) {
        for (j = 0; j < board[i].length; j++) {
            let num = board[i][j];
            let index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (num !== '.') {
                if (row[i][num] || col[j][num] || block[index][num]) {
                    return false;
                } else {
                    row[i][num] = true;
                    col[j][num] = true;
                    block[index][num] = true;
                }
            }
        }
    }

    return true;
};

let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
console.log(isValidSudoku(board))