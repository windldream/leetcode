/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function (A) {
  const len = A.length
  const left = Array(len).fill(0)
  let max = 0
  for (let i = 0; i < len; i++) {
    left[i] = max = Math.max(max, A[i])
  }

  const right = Array(len).fill(Infinity)
  let min = Infinity
  for (let i = len - 1; i >= 0; i--) {
    right[i] = min = Math.min(min, A[i])
  }

  for (let i = 0; i < len; i++) {
    if (left[i] <= right[i + 1]) {
      return i + 1
    }
  }
}

partitionDisjoint([5, 0, 3, 8, 6])
