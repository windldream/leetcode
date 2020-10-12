/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function (n, parent) {
  const dp = Array(n)
    .fill(0)
    .map(() => [])
  for (let i = 0; i < n; i++) {
    dp[i].push(parent[i])
  }

  let j = 1
  while (true) {
    let flag = true
    for (let i = 0; i < n; i++) {
      const t = dp[i][j - 1] !== -1 ? dp[dp[i][j - 1]][j - 1] : -1
      dp[i].push(t)
      if (t != -1) flag = false
    }
    if (flag) break
    j++
  }
  this.dp = dp
}

/**
 * @param {number} node
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function (node, k) {
  if (k === 0 || node === -1) return node
  let ans = node,
    pos = 0
  while (k && ans !== -1) {
    if (pos >= this.dp[ans].length) return -1
    if (k & 1) ans = this.dp[ans][pos]
    k = k >> 1
    pos++
  }
  return ans
}

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
