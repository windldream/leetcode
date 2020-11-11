/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
  const len = arr.length
  const str = arr.join('')
  outer: for (let i = 0; i <= len - m; i++) {
    const pat = str.substr(i, m)
    let s = i + m
    for (let j = 1; j < k; j++) {
      if (s >= len || str.substr(s, m) !== pat) continue outer
      s += m
    }
    return true
  }
  return false
}

containsPattern([1, 2, 1, 2, 1, 3], 2, 3)
