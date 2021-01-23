/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = function (S, C) {
  const arr = []
  const len = S.length
  for (let i = 0; i < len; i++) {
    if (S[i] === C) {
      arr.push(i)
    }
  }

  const ans = []
  for (let i = 0; i < len; i++) {
    if (S[i] === C) {
      ans.push(0)
    } else {
      let min = Infinity
      for (const index of arr) {
        min = Math.min(min, Math.abs(index - i))
      }
      ans.push(min)
    }
  }
  return ans
}
