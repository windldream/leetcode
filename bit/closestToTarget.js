/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var closestToTarget = function (arr, target) {
  let ans = Math.abs(arr[0] - target)
  let valid = new Set()
  valid.add(arr[0])
  for (const num of arr) {
    const validNew = new Set()
    validNew.add(num)
    let last = num
    ans = Math.min(ans, Math.abs(num - target))
    for (const pre of valid) {
      const cur = pre & num
      if (cur !== last) {
        validNew.add(cur)
        ans = Math.min(ans, Math.abs(cur - target))
        last = cur
      }
    }
    valid = validNew
  }
  return ans
}
