/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
  const row = grid.length,
    col = grid[0].length;
  let maxLen = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        let curLen = maxLen;
        label: while (i + curLen < row && j + curLen < col) {
          for (let l = i; l <= i + curLen; l++) {
            if (grid[l][j] !== 1) {
              break label;
            }
          }

          for (let r = j; r <= j + curLen; r++) {
            if (grid[i][r] !== 1) {
              break label;
            }
          }

          // 如果存在 grid[l][j + curLen] 可以将 curLen 的长度增加
          /**
           * 1 1 1 1
           * 1 0 1 1
           * 1 0 1 1
           * 1 1 1 1
           */
          for (let l = i; l <= i + curLen; l++) {
            if (grid[l][j + curLen] !== 1) {
              curLen++;
              continue label;
            }
          }

          for (let r = j; r <= j + curLen; r++) {
            if (grid[i + curLen][r] !== 1) {
              curLen++;
              continue label;
            }
          }

          curLen++;
          maxLen = curLen;
        }
      }
    }
  }

  return maxLen * maxLen;
};

console.log(
  largest1BorderedSquare([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ])
);
