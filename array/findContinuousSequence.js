/**
 * @param {number} target
 * @return {number[][]}
 */
const findContinuousSequence = function (target) {
  const ans = []
  let l = 1
  let r = 1
  let sum = 0
  while (r <= target >> 1) {
    if (sum < target) {
      sum += r
      r++
    } else if (sum > target) {
      sum -= l
      l++
    } else {
      const arr = []
      for (let i = l; i <= r; i++) {
        arr.push(i)
      }
      ans.push(arr.slice())
      sum -= l
      l++
    }
  }
  return ans
}

findContinuousSequence(9)
