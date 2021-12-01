/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let max = 0
  let last = ''
  let continueNum = 0
  for (const c of s) {
    if (last === c) {
      continueNum += 1
    } else {
      continueNum = 1
      last = c
    }
    max = Math.max(max, continueNum)
  }
  return max
}
