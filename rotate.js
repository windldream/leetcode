/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let len = matrix.length, i, j;

    for (i = 0; i < len; i++) {
        for (j = i; j < len; j++) {
            [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]]
        }
    }

    console.log(matrix)

    for (i = 0; i < len; i++) {
        matrix[i].reverse()
    }

    console.log(matrix)
};

console.log(rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))