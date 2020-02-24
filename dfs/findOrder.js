/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  if (prerequisites.length === 0) {
    if (numCourses === 1) {
      return [0];
    }
    return Array(numCourses)
      .fill(0)
      .map((val, index) => index);
  }

  const graph = Array(numCourses)
      .fill(0)
      .map(() => []),
    inDegress = Array(numCourses).fill(0);
  for (const [second, first] of prerequisites) {
    inDegress[second] += 1;
    graph[first].push(second);
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegress[i] === 0) {
      queue.push(i);
    }
  }

  const res = [];
  while (queue.length) {
    const top = queue.shift();
    res.push(top);
    for (const next of graph[top]) {
      inDegress[next] -= 1;
      if (inDegress[next] === 0) {
        queue.push(next);
      }
    }
  }

  return res.length === numCourses ? res : [];
};
