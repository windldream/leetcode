/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @param {Node} p
 * @param {Node} q
 * @return {Node}
 */
var moveSubTree = function (root, p, q) {
  if (isParent(p, q)) return root
  if (p === root) {
    const qParent = findParent(null, root, q)
    const index = qParent.children.indexOf(q)
    qParent.children.splice(index, 1)
    q.children.push(p)
    return q
  }
  if (isAncestor(p, q)) {
    const qParent = findParent(null, root, q)
    const index = qParent.children.indexOf(q)
    qParent.children.splice(index, 1)
    const pParent = findParent(null, root, p)
    const pIndex = pParent.children.indexOf(p)
    pParent.children[pIndex] = q
    q.children.push(p)
    return root
  }

  const pParent = findParent(null, root, p)
  const pIndex = pParent.children.indexOf(p)
  pParent.children.splice(pIndex, 1)
  q.children.push(p)
  return root

  function findParent(parent, cur, p) {
    if (cur === p) return parent
    for (const child of cur.children) {
      const ans = findParent(cur, child, p)
      if (ans !== null) return ans
    }
    return null
  }

  function isAncestor(p, q) {
    for (const child of p.children) {
      if (q === child || isAncestor(child, q)) return true
    }
    return false
  }

  function isParent(p, q) {
    for (const child of q.children) {
      if (child === p) return true
    }
    return false
  }
}
