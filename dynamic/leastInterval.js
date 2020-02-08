/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  if (tasks.length < 1 || n === 0) {
    return tasks.length;
  }
  const len = tasks.length;
  let arr = Array(26).fill(0),
    A = 'A'.charCodeAt();
  for (let i = 0; i < len; i++) {
    arr[tasks[i].charCodeAt() - A] += 1;
  }

  arr = arr.filter(v => v).sort((a, b) => b - a);
  let maxCount = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[0]) {
      maxCount++;
    }
  }

  return (arr[0] - 1) * (n + 1) + maxCount;
};

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 50));
