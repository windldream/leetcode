/**
 * @param {number} n
 * @param {number[][]} red_edges
 * @param {number[][]} blue_edges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, red_edges, blue_edges) {
  const redGraph = Array(n)
    .fill(0)
    .map(() => new Set());
  const blueGraph = Array(n)
    .fill(0)
    .map(() => new Set());

  for (const [u, v] of red_edges) {
    redGraph[u].add(v);
  }

  for (const [u, v] of blue_edges) {
    blueGraph[u].add(v);
  }

  const ans = Array(n).fill(-1);
  let isRed = true;
  ans[0] = 0;
  for (let i = 1; i < n; i++) {
    let redDis = bfs(0, i, isRed);
    let blueDis = bfs(0, i, !isRed);
    if (redDis !== -1 && blueDis !== -1) {
      ans[i] = Math.min(redDis, blueDis);
    } else if (redDis === -1 && blueDis == -1) {
      ans[i] = -1;
    } else {
      ans[i] = Math.max(redDis, blueDis);
    }
  }
  return ans;

  function bfs(s, t, isRed) {
    const queue = [];
    const redVisited = new Set();
    const blueVisited = new Set();
    queue.push(s);
    if (isRed) {
      redVisited.add(s);
    } else {
      blueVisited.add(s);
    }

    let step = 0;
    while (queue.length) {
      for (let len = queue.length - 1; len >= 0; len--) {
        const source = queue.shift();
        if (source === t) {
          return step;
        }
        if (isRed) {
          if (!redGraph[source]) continue;
          for (const next of redGraph[source]) {
            if (redVisited.has(next)) continue;
            queue.push(next);
            redVisited.add(next);
          }
        } else {
          if (!blueGraph[source]) continue;
          for (const next of blueGraph[source]) {
            if (blueVisited.has(next)) continue;
            queue.push(next);
            blueVisited.add(next);
          }
        }
      }
      isRed = !isRed;
      step++;
    }

    return -1;
  }
};

console.log(
  shortestAlternatingPaths(
    6,
    [
      [1, 5],
      [2, 2],
      [5, 5],
      [3, 0],
      [4, 5],
      [2, 4],
      [4, 1],
      [1, 0],
      [1, 2],
      [5, 2],
      [2, 3],
      [0, 1]
    ],
    [
      [4, 4],
      [2, 5],
      [1, 1],
      [5, 4],
      [3, 3]
    ]
  )
);
