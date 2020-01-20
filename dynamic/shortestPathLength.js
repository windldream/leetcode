/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
  const len = graph.length,
    // 如果从 0 到 len - 的所有位都为 1，表示节点已访问
    allVisited = (1 << len) - 1,
    booked = [],
    myQue = [];
  let minSteps = 0;

  for (let i = 0; i < len; i++) {
    booked[i] = [];
    myQue[i] = [i, 1 << i];
  }

  while (myQue.length) {
    for (let i = myQue.length; i > 0; i--) {
      const front = myQue.shift();
      if (allVisited === front[1]) {
        return minSteps;
      }
      for (let j = 0; j < graph[front[0]].length; j++) {
        let next = graph[front[0]][j];
        // 更新这个节点的访问状态
        let next_state = front[1] | (1 << next);
        // 剪枝 避免不必要的访问
        if (!booked[next][next_state]) {
          booked[next][next_state] = 1;
          myQue.push([next, next_state]);
        }
      }
    }
    minSteps++;
  }

  return minSteps;
};

console.log(shortestPathLength([[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]]));
