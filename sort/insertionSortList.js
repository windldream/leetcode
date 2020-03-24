/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  const dummy = new ListNode(0);
  let pre;
  dummy.next = head;

  while (head && head.next) {
    if (head.val < head.next.val) {
      head = head.next;
      continue;
    }

    pre = dummy;
    while (pre.next.val < head.next.val) {
      pre = pre.next;
    }
    // 删除 cur
    const cur = head.next;
    head.next = cur.next;
    // 将 cur 插入到第一个比他大的节点前面
    cur.next = pre.next;
    pre.next = cur;
  }

  return dummy.next;
};
