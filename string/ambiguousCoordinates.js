/**
 * @param {string} S
 * @return {string[]}
 */
var ambiguousCoordinates = function (S) {
  const ans = []
  const len = S.length
  for (let i = 2; i < len; i++) {
    const left = S.substring(1, i)
    const right = S.substring(i, len - 1)
    if ((left.length > 1 && +left === 0) || (right.length > 1 && +right === 0)) continue
    for (let num1 of getNums(left)) {
      for (let num2 of getNums(right)) {
        ans.push('(' + num1 + ', ' + num2 + ')')
      }
    }
  }
  return ans

  function getNums(str) {
    const len = str.length
    const set = new Set()
    if (len === 1) {
      set.add(parseInt(str))
    } else {
      for (let i = 1; i <= len; i++) {
        const left = str.substring(0, i)
        const right = str.substring(i)
        if ((+left + '').length !== left.length) break
        if ((+right === 0 && right.length !== 0) || right[right.length - 1] === '0') continue
        const num1 = left + '.' + right
        set.add(+num1)
      }
    }
    return set
  }
}

ambiguousCoordinates('(0010)')
