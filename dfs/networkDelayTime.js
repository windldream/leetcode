/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  const graph = Array(N + 1).fill(0).map(() => Array(N + 1).fill(Infinity));
  for (let i = 1; i <= N; i++) {
    graph[i][i] = 0;
  }
  for (const [u, v, w] of times) {
    graph[u][v] = w;
  }

  const visited = Array(N + 1).fill(false);
  visited[K] = true;
  // 找出到其他顶点的最短路径
  for (let i = 1; i < N; i++) {
    let minIndex = 0, minDis = Infinity;
    for (let j = 1; j <= N; j++) {
      if (visited[j] === false && graph[K][j] < minDis) {
        minDis = graph[K][j];
        minIndex = j;
      }
    }

    visited[minIndex] = true;
    for (let j = 1; j <= N; j++) {
      if (graph[K][minIndex] + graph[minIndex][j] < graph[K][j]) {
        graph[K][j] = graph[K][minIndex] + graph[minIndex][j];
      }
    }
  }

  let res = 0;
  for (let i = 1; i <= N; i++) {
    if (graph[K][i] === Infinity) return -1;
    res = Math.max(res, graph[K][i]);
  }
  return res;
};