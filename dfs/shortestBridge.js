/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(A) {
  const dirR = [-1, 0, 1, 0];
  const dirC = [0, 1, 0, -1];
  const queue = [];
  const len = A.length;

  label: for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (A[i][j] === 1) {
        dfs(A, i, j);
        break label;
      }
    }
  }

  let step = 0;
  while (queue.length) {
    const len = queue.length;
    for (let k = 0; k < len; k++) {
      const [i, j] = queue.shift();
      for (let d = 0; d < 4; d++) {
        const r = i + dirR[d];
        const c = j + dirC[d];
        if (
          r < 0 ||
          r >= A.length ||
          c < 0 ||
          c >= A[0].length ||
          A[r][c] === 2
        )
          continue;
        if (A[r][c] === 1) return step;
        A[r][c] = 2;
        queue.push([r, c]);
      }
    }
    step++;
  }
  return step;

  function dfs(A, i, j) {
    queue.push([i, j]);
    A[i][j] = 2;
    for (let d = 0; d < 4; d++) {
      const r = i + dirR[d];
      const c = j + dirC[d];
      if (r < 0 || r >= A.length || c < 0 || c >= A[0].length || A[r][c] !== 1)
        continue;
      dfs(A, r, c);
    }
  }
};
