/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function (arr, m) {
  const len = arr.length
  const res = Array(len).fill(1)
  for (let i = len; i >= 1; i--) {
    if (check(res, m)) return i
    res[arr[i - 1] - 1] = 0
  }
  return -1

  function check(arr, m) {
    const len = arr.length
    let i = 0
    while (i < len) {
      if (arr[i] === 1 && arr[i - 1] !== 1) {
        let j = i
        let count = m
        while (arr[j] === 1 && count > 0) {
          j++
          count--
        }
        if (count === 0) {
          if (arr[j] !== 1) return true
        }
        i = j
      } else {
        i++
      }
    }
    return false
  }
}
