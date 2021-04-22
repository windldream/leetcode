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
  if (root === null) return [[]]

  const ans = []
  const prefix = [root.val]
  const left = BSTSequences(root.left)
  const right = BSTSequences(root.right)
  for (const l of left) {
    for (const r of right) {
      const weaved = []
      weaveLists(l, r, weaved, prefix)
      ans.push(...weaved)
    }
  }
  return ans

  function weaveLists(l, r, res, prefix) {
    if (l.length === 0 || r.length === 0) {
      res.push([...prefix, ...l, ...r])
      return
    }

    const left = l.shift()
    prefix.push(left)
    weaveLists(l, r, res, prefix)
    prefix.pop()
    l.unshift(left)

    const right = r.shift()
    prefix.push(right)
    weaveLists(l, r, res, prefix)
    prefix.pop()
    r.unshift(right)
  }
}
