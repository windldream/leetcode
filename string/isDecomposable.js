/**
 * @param {string} s
 * @return {boolean}
 */
var isDecomposable = function (s) {
  const n = s.length

  if ((n - 2) % 3) return false

  let l = 0
  let two = 0
  while (l < n) {
    let r = l + 1
    while (r < n && s[l] === s[r]) r++
    if ((r - l) % 3 === 1) return false
    if ((r - l) % 3 === 2) two++
    l = r
  }

  return two === 1
}
