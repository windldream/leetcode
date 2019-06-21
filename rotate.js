/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let len = matrix.length, i, j;

    // 顺时针交换这四个点的值(i,j) , (j, n-i-1), (n-i-1, n-j-1), (n -j-1, i)
    for (i = 0; i < Math.ceil(len / 2); i++) {
        for (j = i; j < len - i - 1; j++) {
            [matrix[j][len - i - 1], matrix[i][j], matrix[len - j - 1][i], matrix[len - i - 1][len - j - 1]] = 
                [matrix[i][j], matrix[len - j - 1][i], matrix[len - i - 1][len - j - 1], matrix[j][len - i - 1]]; 
        }
    }
};


// var rotate = function(matrix) {
//     let len = matrix.length, i, j;

//     for (i = 0; i < len; i++) {
//         for (j = i; j < len; j++) {
//             [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]]
//         }
//     }

//     for (i = 0; i < len; i++) {
//         matrix[i].reverse()
//     }
// };

console.log(rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))