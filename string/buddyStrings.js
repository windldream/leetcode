/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if (A.length !== B.length || A.length === 0) return false
  const set = new Set()
  let unique = true
  let fi, se
  for (let i = 0; i < A.length; i++) {
    if (set.has(A[i])) {
      unique = false
    }
    set.add(A[i])
    if (A[i] !== B[i]) {
      if (fi == null) {
        fi = i
      } else if (se == null) {
        se = i
        if (A[se] !== B[fi] || A[fi] !== B[se]) return false
      } else {
        return false
      }
    }
  }
  if (fi == null && se == null) {
    if (unique) return false
    return true
  } else if (fi == null || se == null) {
    return false
  }
  return A[se] === B[fi] && A[fi] === B[se]
}

buddyStrings('abab', 'abab')
