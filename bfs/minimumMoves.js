/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
  const n = grid.length;
  const visited = new Set();
  const queue = [];
  queue.push([0, 0, 0, 1]);
  visited.add([0, 0, 0, 1].toString());

  let step = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x1, y1, x2, y2] = queue.shift();
      if (x1 === n - 1 && y1 === n - 2 && x2 === n - 1 && y2 === n - 1) {
        return step;
      }
      if (x1 === x2) {
        // 右移
        if (
          y2 + 1 < n &&
          grid[x1][y2 + 1] != 1 &&
          !visited.has([x2, y2, x2, y2 + 1].toString())
        ) {
          const temp = [x2, y2, x2, y2 + 1];
          queue.push(temp);
          visited.add(temp.toString());
        }

        if (
          x1 + 1 < n &&
          grid[x1 + 1][y1] != 1 &&
          grid[x1 + 1][y2] != 1 &&
          !visited.has([x1 + 1, y1, x1 + 1, y2].toString())
        ) {
          // 下移
          const temp = [x1 + 1, y1, x1 + 1, y2];
          queue.push(temp);
          visited.add(temp.toString());
        }

        if (
          x1 + 1 < n &&
          grid[x1 + 1][y1] != 1 &&
          grid[x1 + 1][y2] != 1 &&
          !visited.has([x1, y1, x1 + 1, y1].toString())
        ) {
          // 顺时针
          const temp = [x1, y1, x1 + 1, y1];
          queue.push(temp);
          visited.add(temp.toString());
        }
      }

      if (y1 === y2) {
        if (
          y1 + 1 < n &&
          grid[x1][y1 + 1] != 1 &&
          grid[x2][y1 + 1] != 1 &&
          !visited.has([x1, y1 + 1, x2, y1 + 1].toString())
        ) {
          // 右移
          const temp = [x1, y1 + 1, x2, y1 + 1];
          queue.push(temp);
          visited.add(temp.toString());
        }

        // 下移
        if (
          x2 + 1 < n &&
          grid[x2 + 1][y1] != 1 &&
          !visited.has([x2, y2, x2 + 1, y2].toString())
        ) {
          const temp = [x2, y2, x2 + 1, y2];
          queue.push(temp);
          visited.add(temp.toString());
        }

        // 逆时针
        if (
          y1 + 1 < n &&
          grid[x1][y1 + 1] != 1 &&
          grid[x2][y2 + 1] != 1 &&
          !visited.has([x1, y1, x1, y1 + 1])
        ) {
          const temp = [x1, y1, x1, y1 + 1];
          queue.push(temp);
          visited.add(temp.toString());
        }
      }
    }
    step++;
  }
  return -1;
};

console.log(
  minimumMoves([
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0]
  ])
);
