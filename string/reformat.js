/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const nums = []
  const letters = []
  for (const c of s) {
    if (c >= 0 && c <= 10) {
      nums.push(c)
    } else {
      letters.push(c)
    }
  }

  if (Math.abs(letters.length - nums.length) > 1) return ''

  let i = 0
  let ans = ''
  const len = Math.min(letters.length, nums.length)
  while (i < len) {
    ans += letters[i] + nums[i]
    i++
  }
  if (letters.length < nums.length) {
    ans = nums[i] + ans
  } else if (letters.length > nums.length) {
    ans = ans + letters[i]
  }
  return ans
}
