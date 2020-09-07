/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function (arr, m) {
  const len = arr.length
  if (len === m) return m
  const res = Array(len + 1).fill(1)
  for (let i = len - 1; i >= 0; i--) {
    res[arr[i]] = 0
    if (check(res, arr[i], m)) return i
  }
  return -1

  function check(res, index, m) {
    let i = index - 1
    let j = index + 1
    let l = 0
    let r = 0
    while (i >= 1 && res[i] !== 0 && l <= m) {
      l++
      i--
    }
    while (j < res.length && res[j] !== 0 && r <= m) {
      r++
      j++
    }
    return l === m || r === m
  }
}
