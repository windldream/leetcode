/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const visited = new Set()
  dfs(0, 0)
  return visited.size

  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || visited.has(i + '&' + j) || sum(i, j) > k) return
    visited.add(i + '&' + j)
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }

  // function sum(i, j) {
  //   let ans = 0
  //   while (i) {
  //     ans += i % 10
  //     i = ~~(i / 10)
  //   }
  //   while (j) {
  //     ans += j % 10
  //     j = ~~(j / 10)
  //   }
  //   return ans
  // }

  function sum(i, j) {
    let ans = 0
    for (let num of i + '' + j) {
      ans += +num
    }
    return ans
  }
}
