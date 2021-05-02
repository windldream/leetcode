/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function (s) {
  return backtracking(null, s)

  function backtracking(pre, str) {
    if (str.length === 0 && pre !== +s) return true
    for (let i = 0; i < str.length; i++) {
      let num = str.substring(0, i + 1)
      if (pre === null) {
        if (backtracking(+num, str.substring(i + 1))) return true
      } else {
        if (pre - num !== 1) continue
        if (backtracking(+num, str.substring(i + 1))) return true
      }
    }
    return false
  }
}
