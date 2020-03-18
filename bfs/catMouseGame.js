/**
 * @param {number[][]} graph
 * @return {number}
 */
var catMouseGame = function (graph) {
  const len = graph.length;
  const DRAW = 0;
  const MOUSE = 1;
  const CAT = 2;
  const color = Array(len).fill(0).map(() => Array(len).fill(0).map(() => Array(3).fill(0)));
  const degree = Array(len).fill(0).map(() => Array(len).fill(0).map(() => Array(3).fill(0)));

  // 入度队列
  // 在每个状态下能走的路径数
  for (let m = 0; m < len; m++) {
    for (let c = 0; c < len; c++) {
      // 1.表示mouse回合
      // 2.表示cat回合
      degree[m][c][1] = graph[m].length;
      degree[m][c][2] = graph[c].length;
      for (const x of graph[c]) {
        if (x === 0) {
          degree[m][c][2]--;
          break;
        }
      }
    }
  }

  const queue = [];
  for (let i = 0; i < len; i++) {
    for (let t = 1; t <= 2; t++) {
      // mouse win
      color[0][i][t] = MOUSE;
      queue.push([0, i, t, MOUSE]);
      if (i > 0) {
        // cat win
        color[i][i][t] = CAT;
        queue.push([i, i, t, CAT]);
      }
    }
  }

  while (queue.length) {
    const [i, j, t, c] = queue.shift();
    for (const [i2, j2, t2] of parents(graph, i, j, t)) {
      if (color[i2][j2][t2] === DRAW) {
        if (t2 === c) {
          color[i2][j2][t2] = c;
          queue.push([i2, j2, t2, c])
        } else {
          degree[i2][j2][t2]--;
          // 该状态下无路可走
          if (degree[i2][j2][t2] === 0) {
            color[i2][j2][t2] = 3 - t2;
            queue.push([i2, j2, t2, 3 - t2]);
          }
        }
      }
    }
  }

  return color[1][2][1];

  function parents(graph, m, c, t) {
    const set = new Set();
    if (t === 2) {
      for (const m2 of graph[m]) {
        set.add([m2, c, 3 - t]);
      }
    } else {
      for (const c2 of graph[c]) {
        if (c2 === 0) continue;
        set.add([m, c2, 3 - t]);
      }
    }
    return set;
  }
};