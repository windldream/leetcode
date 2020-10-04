/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  const indegree = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    if (leftChild[i] !== -1) {
      indegree[leftChild[i]] += 1
    }
    if (rightChild[i] !== -1) {
      indegree[rightChild[i]] += 1
    }
  }

  let root = -1
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      root = i
      break
    }
  }
  if (root === -1) return false

  const seen = new Set()
  const queue = []
  seen.add(root)
  queue.push(root)
  while (queue.length) {
    const u = queue.shift()
    if (leftChild[u] !== -1) {
      if (seen.has(leftChild[u])) return false
      seen.add(leftChild[u])
      queue.push(leftChild[u])
    }
    if (rightChild[u] !== -1) {
      if (seen.has(rightChild[u])) return false
      seen.add(rightChild[u])
      queue.push(rightChild[u])
    }
  }

  return seen.size === n
}

validateBinaryTreeNodes(4, [1, 2, 0, -1], [-1, -1, -1, -1])
