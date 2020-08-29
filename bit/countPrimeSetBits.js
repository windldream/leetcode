/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  const map = Array(33).fill(false)
  for (let i = 2; i <= 32; i++) {
    map[i] = isPrimeNum(i)
  }

  let res = 0
  for (let i = L; i <= R; i++) {
    if (map[getCount(i)]) res++
  }
  return res

  function isPrimeNum(n) {
    for (let j = n === 2 ? 3 : 2; j <= Math.sqrt(n) + 1; j++) {
      if (n % j === 0) return false
    }
    return true
  }

  function getCount(n) {
    let res = 0
    while (n !== 0) {
      if (n & 1) res++
      n >>= 1
    }
    return res
  }
}
