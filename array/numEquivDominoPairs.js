/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const len = dominoes.length
  let ans = 0
  for (let i = 0; i < len; i++) {
    const [a, b] = dominoes[i]
    for (let j = i + 1; j < len; j++) {
      const [c, d] = dominoes[j]
      if ((a === c && b === d) || (a === d && b === c)) ans++
    }
  }
  return ans
}
