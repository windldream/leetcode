/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  const ans = []
  let l = 1
  let r = 1
  let sum = 0
  while (l <= ~~(target / 2)) {
    if (sum < target) {
      sum += r
      r++
    } else if (sum > target) {
      sum -= l
      l++
    } else {
      const tmp = []
      for (let i = l; i < r; i++) {
        tmp.push(i)
      }
      ans.push(tmp)
      sum -= l
      l++
    }
  }
  return ans
}
