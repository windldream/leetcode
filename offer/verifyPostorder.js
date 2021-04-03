/**
 * @param {number[]} postorder
 * @return {boolean}
 */
// var verifyPostorder = function (postorder) {
//   const n = postorder.length
//   const stack = []
//   let prev = Infinity
//   for (let i = n - 1; i >= 0; i--) {
//     if (postorder[i] > prev) return false
//     while (stack.length && stack[stack.length - 1] > postorder[i]) {
//       prev = stack.pop()
//     }
//     stack.push(postorder[i])
//   }
//   return true
// }

var verifyPostorder = function (postorder) {
  const n = postorder.length
  if (n < 2) return true
  return verify(postorder, 0, n - 1)

  function verify(postorder, l, r) {
    if (l >= r) return true
    const rootVal = postorder[r]
    let k = l
    while (k < r && postorder[k] < rootVal) k++
    for (let i = k; i < r; i++) {
      if (postorder[i] < rootVal) return false
    }
    return verify(postorder, l, k - 1) && verify(postorder, k, r - 1)
  }
}
