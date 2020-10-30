/**
 * @param {string} s
 * @return {number}
 */
var numWays = function (s) {
  const mod = 10 ** 9 + 7
  let total = 0
  for (const c of s) total += +c
  if (total % 3) return 0
  if (total === 0) return (((s.length - 1) * (s.length - 2)) / 2) % mod

  const aver = total / 3
  let c = 0
  let c1 = 0
  let c2 = 0
  for (const num of s) {
    if (num === '1') c++
    if (c === aver) c1++
    if (c === 2 * aver) c2++
  }
  return (c1 * c2) % mod
}

numWays('0000')
