/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    return head;
  }

  let old_tail = head,
    n = 1;

  // 构造循环链表同时计算链表的长度
  for (; old_tail.next !== null; n++) {
    old_tail = old_tail.next;
  }
  old_tail.next = head;

  let new_tail = head,
    new_head;
  // 查找新的链表头部
  for (let i = 0; i < n - (k % n) - 1; i++) {
    new_tail = new_tail.next;
  }
  new_head = new_tail.next;
  // 断开环
  new_tail.next = null;

  return new_head;
};
