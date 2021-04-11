/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  const queue = Array(n)
    .fill(0)
    .map((val, idx) => idx + 1)
  let start = 0
  while (queue.length > 1) {
    if (start === queue.length) {
      start = 0
    }
    for (let i = 1; i < k; i++) {
      start += 1
      if (start === queue.length) {
        start = start % queue.length
      }
    }
    queue.splice(start, 1)
  }
  return queue[0]
}

findTheWinner(6, 5)
