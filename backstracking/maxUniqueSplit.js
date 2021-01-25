/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
  let ans = 1
  backtracking(0, [])
  return ans

  function backtracking(pos, nums) {
    if (pos === s.length) {
      ans = Math.max(ans, nums.length)
      return
    }
    for (let i = pos + 1; i <= s.length; i++) {
      const str = s.substring(pos, i)
      if (!nums.includes(str)) {
        nums.push(str)
        backtracking(i, nums)
        nums.pop()
      }
    }
  }
}
