/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
  if (heightMap.length === 0) {
    return 0;
  }
  const m = heightMap.length;
  const n = heightMap[0].length;
  const queue = [];
  for (let i = 0; i < m; i++) {
    queue.push([heightMap[i][0], i, 0]);
    heightMap[i][0] = -1;
    if (n > 1) {
      queue.push([heightMap[i][n - 1], i, n - 1]);
      heightMap[i][n - 1] = -1;
    }
  }

  for (let i = 1; i < n - 1; i++) {
    if (heightMap[0][i] !== -1) {
      queue.push([heightMap[0][i], 0, i]);
      heightMap[0][i] = -1;
    }
    if (m > 1) {
      queue.push([heightMap[m - 1][i], m - 1, i]);
      heightMap[m - 1][i] = -1;
    }
  }

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let res = 0;
  queue.sort((a, b) => a[0] - b[0]);
  while (queue.length) {
    let [val, i, j] = queue.shift();
    for (let d = 0; d < 4; d++) {
      const r = i + dx[d];
      const c = j + dy[d];
      if (r < 0 || c < 0 || r >= m || c >= n || heightMap[r][c] === -1)
        continue;
      res += Math.max(0, val - heightMap[r][c]);
      const max = Math.max(val, heightMap[r][c]);
      const insertIndex = queue.findIndex(item => item[0] >= max);
      queue.splice(insertIndex, 0, [max, r, c]);
      heightMap[r][c] = -1;
    }
  }
  return res;
};
