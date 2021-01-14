/**
 * @param {number[]} postorder
 * @return {boolean}
 */
const verifyPostorder = function (postorder) {
  return dfs(postorder, 0, postorder.length - 1)

  function dfs(postorder, i, j) {
    if (i >= j) return true
    let p = i
    while (postorder[p] < postorder[j]) p++
    let m = p
    while (postorder[p] > postorder[j]) p++
    return p === j && dfs(postorder, i, m - 1) && dfs(postorder, m, j - 1)
  }
}

verifyPostorder([1, 6, 3, 2, 5])
