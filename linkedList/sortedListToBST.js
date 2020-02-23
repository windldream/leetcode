/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    return new TreeNode(head.val);
  }

  let pre = head;
  let p = pre.next;
  let q = p.next;
  while (q !== null && q.next !== null) {
    pre = pre.next;
    p = pre.next;
    q = q.next.next;
  }
  pre.next = null;
  const node = new TreeNode(p.val);
  node.left = sortedListToBST(head);
  node.right = sortedListToBST(p.next);
  return node;
};
