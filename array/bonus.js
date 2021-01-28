class Node {
  constructor(index) {
    this.val = 0n
    this.index = index
    this.children = []
  }
}
/**
 * @param {number} n
 * @param {number[][]} leadership
 * @param {number[][]} operations
 * @return {number[]}
 */
var bonus = function (n, leadership, operations) {
  const mod = BigInt(10 ** 9 + 7)
  const tree = new Node(1)
  for (const [u, v] of leadership) {
    const child = new Node(v)
    const p = findNode(tree, u)
    p.children.push(child)
  }

  const ans = []
  for (const [type, index, leetCoin] of operations) {
    const node = findNode(tree, index)
    if (type === 1) {
      node.val += BigInt(leetCoin)
    } else if (type === 2) {
      addLeetCoin(node, leetCoin)
    } else if (type === 3) {
      const num = query(node)
      ans.push(num % mod)
    }
  }
  return ans

  function findNode(node, index) {
    if (node.index === index) return node
    for (const child of node.children) {
      const ans = findNode(child, index)
      if (ans) return ans
    }
  }

  function addLeetCoin(node, leetCoin) {
    node.val += BigInt(leetCoin)
    for (const child of node.children) {
      addLeetCoin(child, leetCoin)
    }
  }

  function query(node) {
    let ans = 0n
    ans += node.val
    for (const child of node.children) {
      ans += query(child)
    }
    return ans
  }
}
