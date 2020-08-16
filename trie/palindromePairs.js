/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const len = words.length
  const res = []

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (isPalined(words[i] + words[j])) {
        res.push([i, j])
      }
      if (isPalined(words[j] + words[i])) {
        res.push([j, i])
      }
    }
  }
  return res

  function isPalined(str) {
    let l = 0
    let r = str.length - 1

    while (l < r) {
      if (str[l] !== str[r]) {
        return false
      }
      l++
      r--
    }
    return true
  }
}
