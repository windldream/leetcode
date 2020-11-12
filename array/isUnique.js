/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  const set = new Set()
  for (const c of astr) {
    if (set.has(c)) return false
    set.add(c)
  }
  return true
}
