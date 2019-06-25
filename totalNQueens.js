/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let row = [], col = [], i, j, res = 0, board = [];

    for (i = 0; i < n; i++) {
        row[i] = false;
        col[i] = false;
        board[i] = [];
        for (j = 0; j < n; j++) {
            board[i][j] = '.';
        }
    }

    backTrack(0);

    return res;

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

    function placeQ(i, j) {  
        row[i] = true;
        col[j] = true;
        board[i][j] = 'Q';
    }

    function placeNextQ(i) {  
        if (i === n - 1) {
            res++;
        } else {
            backTrack(i + 1);
        }
    }

    function removeQ(i, j) {
        row[i] = false;
        col[j] = false;
        board[i][j] = '.';
    }

    function couldPlace(i, j, n) {
        return isSlash(i, j, n) && !row[i] && !col[j];
    }

    function backTrack(i) {
        for (let j = 0; j < n; j++) {
            if (couldPlace(i, j, n)) {
                placeQ(i, j);
                placeNextQ(i);
                removeQ(i, j);
            }
        }
    }
};

console.log(totalNQueens(5))