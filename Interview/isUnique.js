/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  for (let i = 0; i < astr.length; i++) {
    if (astr.lastIndexOf(astr[i]) !== i) return false
  }
  return true
}
