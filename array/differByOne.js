/**
 * @param {string[]} dict
 * @return {boolean}
 */
var differByOne = function (dict) {
  const n = dict.length
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      let count = 0
      for (let k = 0; k < dict[i].length; k++) {
        if (dict[i][k] !== dict[j][k]) count++
        if (count > 1) break
      }
      if (count === 1) return true
    }
  }
  return false
}
