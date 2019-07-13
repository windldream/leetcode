/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 0) {
        return [];
    }
    let m = matrix.length, n = matrix[0].length, res = [], i = 0, j = 0, seen = {};

    while (true) {
        for (; j < n; j++) {
            if (!seen['' + i + j]) {
                res.push(matrix[i][j]);
                seen['' + i + j] = true;
            } else {
                break;
            }
        }
        i++;
        j--;

        for (; i < m; i++) {
            if (!seen['' + i + j]) {
                res.push(matrix[i][j]);
                seen['' + i + j] = true;
            } else {
                break;
            }
        }
        i--;
        j--;

        for (; j >= 0; j--) {
            if (!seen['' + i + j]) {
                res.push(matrix[i][j]);
                seen['' + i + j] = true;
            } else {
                break;
            }
        }
        i--;
        j++;

        for (; i >= 0; i--) {
            if (!seen['' + i + j]) {
                res.push(matrix[i][j]);
                seen['' + i + j] = true;
            } else {
                break;
            }
        }
        i++;
        j++;

        if (res.length === m * n) {
            break;
        }
    }

    return res;
};

console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]))
/**
 输入:
[
 [ 1, 2, 3, 4 ],
 [ 5, 6, 7, 8 ],
 [ 9, 10, 11, 12 ]
 [ 13, 14, 15, 16 ]
]
输出: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
*/