/**
 * @param {string} L
 * @param {string} R
 * @return {number}
 */
var superpalindromesInRange = function (L, R) {
  const l = BigInt(L)
  const r = BigInt(R)
  const magic = 10 ** 5
  let ans = 0

  for (let k = 1; k < magic; k++) {
    let str = k + ''
    for (let i = str.length - 2; i >= 0; i--) {
      str += str[i]
    }
    let v = BigInt(str)
    v *= v
    if (v > r) break
    if (v >= l && isPalindrome(v + '')) ans++
  }

  for (let k = 1; k < magic; k++) {
    let str = k + ''
    for (let i = str.length - 1; i >= 0; i--) {
      str += str[i]
    }
    let v = BigInt(str)
    v *= v
    if (v > r) break
    if (v >= l && isPalindrome(v + '')) ans++
  }

  return ans

  function isPalindrome(x) {
    let l = 0
    let r = x.length - 1
    while (l < r) {
      if (x[l++] !== x[r--]) return false
    }
    return true
  }
}

superpalindromesInRange('4', '1000')
