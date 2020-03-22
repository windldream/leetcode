/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
  const n = arr.length;
  const hashMap = new Map();
  const queue = [];
  const visited = new Set();
  queue.push(n - 1);
  visited.add(n - 1);

  for (let i = 0; i < n; i++) {
    if (!hashMap.get(arr[i])) {
      hashMap.set(arr[i], new Set());
    }
    hashMap.get(arr[i]).add(i);
  }

  let step = 0;
  while (queue.length) {
    for (let len = queue.length - 1; len >= 0; len--) {
      const index = queue.shift();
      if (index === 0) {
        return step;
      }
      if (index + 1 < n && !visited.has(index + 1)) {
        queue.push(index + 1);
        visited.add(index + 1);
      }
      if (index - 1 >= 0 && !visited.has(index - 1)) {
        queue.push(index - 1);
        visited.add(index - 1);
      }
      if (hashMap.get(arr[index])) {
        for (const i of hashMap.get(arr[index])) {
          if (!visited.has(i)) {
            if (i === n - 1) {
              return step + 1;
            }
            queue.push(i);
            visited.add(i);
          }
        }
      }
    }
    step += 1;
  }

  return -1;
};
