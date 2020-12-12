/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} from
 * @param {number} to
 * @return {TreeNode}
 */
var correctBinaryTree = function (root) {
  let queue = []
  queue.push(root)
  let level = 0
  while (queue.length) {
    const len = queue.length
    const list = []
    for (let i = 0; i < len; i++) {
      const node = queue[i]
      if (node.left) {
        list.push(node.left)
      }
      if (node.right) {
        list.push(node.right)
      }
    }
    for (let i = 0; i < list.length; i++) {
      if (list.includes(list[i].right)) {
        for (let j = 0; j < len; j++) {
          if (queue[j].left === list[i]) {
            queue[j].left = null
            return root
          }
          if (queue[j].right === list[i]) {
            queue[j].right = null
            return root
          }
        }
      }
    }
    queue = list
    level++
  }
}
