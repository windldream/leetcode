/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let ans = 0
  backtracking(0, '', arr)
  return ans

  function backtracking(index, str, arr) {
    ans = Math.max(ans, str.length)
    if (str.length >= 26 || index >= arr.length) return
    if (includes(str, arr[index]) && repeat(arr[index])) {
      backtracking(index + 1, str + arr[index], arr)
    }
    backtracking(index + 1, str, arr)
  }

  function includes(str, s) {
    for (const c of str) {
      if (s.includes(c)) return false
    }
    return true
  }

  function repeat(str) {
    const map = new Set()
    for (const c of str) {
      if (map.has(c)) return false
      map.add(c)
    }
    return true
  }
}
