/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let m = 0
  return dfs(arr, 0, m)

  function dfs(arr, index, m) {
    if (index === arr.length) return 0
    let t = isUnique(arr[index], m)
    if (t !== false) {
      const curLen = arr[index].length
      return Math.max(curLen + dfs(arr, index + 1, t), dfs(arr, index + 1, m))
    }
    return dfs(arr, index + 1, m)
  }

  function isUnique(s, t) {
    for (let c of s) {
      let i = c.charCodeAt() - 'a'.charCodeAt()
      if (t & (1 << i)) {
        return false
      }
      t |= 1 << i
    }
    return t
  }
}
