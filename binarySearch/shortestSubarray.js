/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function (A, K) {
  const len = A.length
  const sum = Array(len + 1).fill(0)
  for (let i = 0; i < A.length; i++) {
    sum[i + 1] = sum[i] + A[i]
  }

  let l = 0
  let r = 0
  let ans = Infinity
  const queue = []
  while (r <= A.length) {
    while (queue.length && sum[r] <= sum[queue[queue.length - 1]]) {
      queue.pop()
    }
    while (queue.length && sum[r] >= sum[queue[0]] + K) {
      ans = Math.min(ans, r - queue.shift())
    }
    queue.push(r)
    r++
  }

  return ans === Infinity ? -1 : ans
}

shortestSubarray([84, -37, 32, 40, 95], 167)
