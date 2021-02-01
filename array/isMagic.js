/**
 * @param {number[]} target
 * @return {boolean}
 */
var isMagic = function (target) {
  const n = target.length
  outer: for (let k = 1; k <= n; k++) {
    let comb = Array(n)
      .fill(0)
      .map((val, index) => index + 1)
    let index = 0
    while (index < n) {
      const even = []
      const odd = []
      for (let i = 0; i < comb.length; i++) {
        if (i & 1) {
          even.push(comb[i])
        } else {
          odd.push(comb[i])
        }
      }
      comb = [...even, ...odd]
      for (let i = 0; i < Math.min(k, comb.length); i++) {
        if (target[index] !== comb[i]) continue outer
        index++
      }
      comb = comb.slice(k)
    }
    return true
  }
  return false
}
