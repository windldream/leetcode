/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
  if (!s.includes('++')) return []
  const ans = []
  let i = 0
  while (s.indexOf('++', i) > -1) {
    const index = s.indexOf('++', i)
    ans.push(s.substring(0, index) + '--' + s.substring(index + 2))
    i = index + 1
  }
  return ans
};