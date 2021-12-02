/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const sortScoreMap = score
    .slice()
    .sort((a, b) => b - a)
    .reduce((pre, cur, index) => {
      pre[cur] = index + 1
      return pre
    }, {})
  const ans = []
  for (const s of score) {
    const index = sortScoreMap[s]
    if (index === 1) {
      ans.push('Gold Medal')
    } else if (index === 2) {
      ans.push('Silver Medal')
    } else if (index === 3) {
      ans.push('Bronze Medal')
    } else {
      ans.push(index + '')
    }
  }
  return ans
}
