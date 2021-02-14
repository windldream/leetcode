/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let zeroStart = 0
  let oneStart = 0
  for (let i = 0; i < s.length; i++) {
    if (i & 1) {
      if (s[i] !== '1') zeroStart++
      if (s[i] !== '0') oneStart++
    } else {
      if (s[i] !== '0') zeroStart++
      if (s[i] !== '1') oneStart++
    }
  }

  return Math.min(zeroStart, oneStart)
}

minOperations('10010100')
// 1 0 1 1 1 => 1
// 0 1 1 1 1 => 2
