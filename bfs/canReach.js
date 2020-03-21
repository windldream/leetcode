/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  const queue = [];
  const visited = new Set();
  queue.push(start);
  visited.add(start);

  while (queue.length) {
    for (let len = queue.length - 1; len >= 0; len--) {
      const index = queue.shift();
      if (arr[index] === 0) return true;

      if (!visited.has(index + arr[index])) {
        queue.push(index + arr[index]);
        visited.add(index + arr[index]);
      }
      if (!visited.has(index - arr[index])) {
        queue.push(index - arr[index]);
        visited.add(index - arr[index]);
      }
    }
  }

  return false;
};
