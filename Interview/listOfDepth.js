/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function (tree) {
  const ans = []
  const queue = [tree]
  while (queue.length) {
    const len = queue.length
    const dummyHead = new ListNode()
    let cur = dummyHead
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      cur.next = new ListNode(node.val)
      cur = cur.next
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    ans.push(dummyHead.next)
  }
  return ans
}
