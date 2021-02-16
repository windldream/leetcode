/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  if (digits.length === 0) return []
  if (digits.length === 1) {
    return map[digits[0]].split('')
  }
  const ans = []
  const head = letterCombinations(digits[0])
  const tail = letterCombinations(digits.substring(1))
  for (const a of head) {
    for (const b of tail) {
      ans.push(a + b)
    }
  }
  return ans
}
