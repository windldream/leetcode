/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  let ans = s
  const len = s.length
  for (const [dir, amount] of shift) {
    if (dir === 0) {
      ans = ans.slice(amount) + ans.slice(0, amount)
    } else {
      ans = ans.slice(len - amount) + ans.slice(0, len - amount)
    }
  }
  return ans
};