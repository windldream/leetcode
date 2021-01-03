/**
 * @param {number} d
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var digitsCount = function(d, low, high) {
  return find(d, high) - find(d, low - 1)

  function find(x, tar) {
    if (tar < 10) {
      if (x <= tar) return 1
      return 0
    }

    const q = Math.trunc(tar / 10)
    const m = tar % 10
    let ans = q + find(x, m)
    ans += (find(x, q - 1) - find(x, 0)) * 10 + (find(x, q) - find(x, q - 1)) * (m + 1)
    return ans
  }
};