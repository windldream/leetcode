/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
  const ans = []
  const words = s.split(' ')

  let maxCol = 0
  for (const word of words) {
    maxCol = Math.max(maxCol, word.length)
  }

  let col = 0
  while (col < maxCol) {
    ans[col] = ''
    for (const word of words) {
      ans[col] += word[col] || ' '
    }
    ans[col] = ans[col].trimRight()
    col++
  }
  return ans
}
