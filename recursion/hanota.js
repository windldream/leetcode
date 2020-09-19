/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function (A, B, C) {
  const len = A.length
  recursion(len, A, B, C)

  function recursion(len, A, B, C) {
    if (len === 1) {
      C.push(A[A.length - 1])
      A.pop()
    } else {
      recursion(len - 1, A, C, B)
      C.push(A[A.length - 1])
      A.pop()
      recursion(len - 1, B, A, C)
    }
  }
}
