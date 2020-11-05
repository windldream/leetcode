/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
  const count = Array(121).fill(0)
  for (const age of ages) {
    count[age] += 1
  }
  let res = 0
  for (let i = 0; i <= 120; i++) {
    if (count[i] === 0) continue
    if (i > 14) {
      res += count[i] * (count[i] - 1)
    }
    for (let j = 0; j < i; j++) {
      if (j > (i >> 1) + 7) {
        res += count[i] * count[j]
      }
    }
  }
  return res
}
