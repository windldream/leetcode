/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (s, cost) {
  const len = s.length
  let ans = 0
  let i = 0
  while (i < len - 1) {
    let j = i
    while (s[i] === s[j] && j < len) {
      j++
    }
    if (i === j - 1) {
      i++
      continue
    }
    const sameList = cost.slice(i, j)
    const total = sameList.reduce((prev, cur) => prev + cur)
    const max = Math.max.apply(null, sameList)
    ans += total - max
    i = j
  }
  return ans
}

minCost('aaabbbabbbb', [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1])
