/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const ans = []
  if (s.length === 0) return ans
  backtracking(s, [])
  return ans

  function backtracking(s, path) {
    if (s.length === 0) {
      ans.push(path.slice())
      return
    }
    for (let i = 0; i < s.length; i++) {
      const str = s.substring(0, i + 1)
      if (isPalindrome(str)) {
        path.push(str)
        backtracking(s.substring(i + 1), path)
        path.pop()
      }
    }
  }

  function isPalindrome(str) {
    let l = 0
    let r = str.length - 1
    while (l < r) {
      if (str[l] !== str[r]) return false
      l += 1
      r -= 1
    }
    return true
  }
}
