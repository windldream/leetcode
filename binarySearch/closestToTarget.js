/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var closestToTarget = function (arr, target) {
  let cur = new Set()
  let ans = Infinity

  for (const num of arr) {
    const temp = new Set()
    temp.add(num)
    ans = Math.min(ans, Math.abs(target - num))

    for (const a of cur) {
      const val = a & num
      temp.add(val)
      ans = Math.min(ans, Math.abs(target - val))
    }

    cur = temp
  }

  return ans
}
