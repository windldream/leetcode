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
var listOfDepth = function(tree) {
  if (tree === null) {
    return [];
  }
  const stack = [],
    res = [];

  stack.push(tree);
  while (stack.length) {
    const len = stack.length;
    const listNode = new ListNode(1);
    let temp = listNode;
    for (let i = 0; i < len; i++) {
      const node = stack.shift();
      const list = new ListNode(node.val);
      temp.next = list;
      temp = temp.next;
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    res.push(listNode.next);
  }

  return res;
};
