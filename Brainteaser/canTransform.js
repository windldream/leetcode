/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  const len = start.length
  let i = 0,
    j = 0

  while (i < len || j < len) {
    while (i < len && start[i] === 'X') i++

    while (j < len && end[j] === 'X') j++

    if (start[i] !== end[j]) return false

    if ((start[i] === 'L' && i < j) || (end[j] === 'R' && i > j)) return false

    if (i < len) i++

    if (j < len) j++
  }
  return true
}
