/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function (A, B, C) {
  dfs(A.length, A, B, C)

  function dfs(n, A, B, C) {
    if (n === 1) {
      C.push(A.pop())
    } else {
      dfs(n - 1, A, C, B)
      C.push(A.pop())
      dfs(n - 1, B, A, C)
    }
  }
}
