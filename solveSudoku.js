/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let row = [], col = [], block = [], i, j, sudokuSolved = false;

    // 标记数组
    for (i = 0; i < 9; i++) {
        row[i] = [];
        col[i] = [];
        block[i] = [];
    }

    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num !== '.') {
                placeNum(num, i, j);
            }
        }
    }

    backtrack(0, 0);

    function couldPlace(n, i, j) {
        let index = getIndex(i, j);
        
        return !row[i][n] && !col[j][n] && !block[index][n];
    }

    // 填字
    function placeNum(n, i, j) {
        let index = getIndex(i, j);
        
        board[i][j] = n + '';
        row[i][n] = true;
        col[j][n] = true;
        block[index][n] = true;
    }

    // 回溯
    function removeNumber(n, i, j) {
        let index = getIndex(i, j);

        board[i][j] = '.';
        row[i][n] = false;
        col[j][n] = false;
        block[index][n] = false;
    }

    function placeNextNumbers(i, j) {
        if (i == 8 && j == 8) {
            sudokuSolved = true;
        } else {
            // 当前行的末尾
            if (j == 8) {
                backtrack(i + 1, 0);
            } else {
                backtrack(i, j + 1);
            }
        }
    }

    function backtrack(i, j) {
        if (board[i][j] === '.') {
            for (let n = 1; n < 10; n++) {
                if (couldPlace(n, i, j)) {
                    placeNum(n, i, j);
                    placeNextNumbers(i, j);

                    if (!sudokuSolved) {
                        removeNumber(n, i, j);
                    }
                }
            }
        } else {
            placeNextNumbers(i, j);
        }
    }

    function getIndex(i, j) {
        return Math.floor(i / 3) * 3 + Math.floor(j / 3);
    }
};

solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])