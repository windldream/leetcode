/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var BSTSequences = function (root) {
  const res = []
  if (root === null) {
    res.push([])
    return res
  }

  const prefix = []
  prefix.push(root.val)

  const left = BSTSequences(root.left)
  const right = BSTSequences(root.right)
  for (const l of left) {
    for (const r of right) {
      const weaved = []
      weaveLists(l, r, weaved, prefix)
      res.push(...weaved)
    }
  }
  return res

  function weaveLists(l, r, results, prefix) {
    if (l.length === 0 || r.length === 0) {
      const res = prefix.slice()
      res.push(...l, ...r)
      results.push(res)
      return
    }

    const left = l.shift()
    prefix.push(left)
    weaveLists(l, r, results, prefix)
    prefix.pop()
    l.unshift(left)

    const right = r.shift()
    prefix.push(right)
    weaveLists(l, r, results, prefix)
    prefix.pop()
    r.unshift(right)
  }
}
