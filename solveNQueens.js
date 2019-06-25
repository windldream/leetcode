/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let row = [], col = [], i, j, res = [], board = [];

    reset(0, 0);

    backtrack(0);

    return res;

    function reset(l, m) {
        let i, j;
        for (i = l; i < n; i++) {
            row[i] = false;
            col[i] = false;
            board[i] = [];
        }
    
        for (i = l; i < n; i++) {
            for (j = m; j < n; j++) {
                board[i][j] = '.';
            }
        }
    }

    function isSlash(i, j, n) {
        let l = i, m = j;  
        // 左上角
        while (l >= 1 && m >= 1) {
            l = l - 1;
            m = m - 1;
            if (board[l][m] === 'Q') {
                return false;
            }
        }

        l = i, m = j;
        // 右上角
        while (l < n - 1 && m >= 1) {
            l = l + 1;
            m = m - 1;
            if (board[l][m] === 'Q') {
                return false;
            }
        }

        l = i, m = j;
        // 左下角
        while (l >= 1 && m < n - 1) {
            l = l - 1;
            m = m + 1;
            if (board[l][m] === 'Q') {
                return false;
            }
        }

        l = i, m = j;
        // 右下角
        while (l < n - 1 && m < n - 1) {
            l = l + 1;
            m = m + 1;
            if (board[l][m] === 'Q') {
                return false;
            }
        }

        return true;
    }

    function couldPlace(i, j) {
        return isSlash(i, j, n) && !row[i] && !col[j];
    }

    function placeQ(i, j) {
        board[i][j] = 'Q';
        row[i] = true;
        col[j] = true;
    }

    // 回溯
    function removeQ(i, j) {  
        board[i][j] = '.';
        row[i] = false;
        col[j] = false;
    }

    function placeNextQ(i, j) {
        if (i === n - 1) {
            res.push(board.map(item => item.join('')));
        } else {
            backtrack(i + 1);
        }
    }

    function backtrack(i) {
        for (let j = 0; j < n; j++) {
            if (couldPlace(i, j)) {
                placeQ(i, j);
                placeNextQ(i, j);
                removeQ(i, j);
            }
        }
    }
};

console.log(solveNQueens(5))