/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  const len = s.length
  let score = 0
  for (let i = 1; i < len; i++) {
    const left = s.substring(0, i)
    const right = s.substring(i)
    let leftScore = 0
    for (const n of left) {
      leftScore += n === '0'
    }
    let rightScore = 0
    for (const n of right) {
      rightScore += n === '1'
    }
    score = Math.max(score, leftScore + rightScore)
  }
  return score
}

maxScore('00')
