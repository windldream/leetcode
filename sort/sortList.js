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
var sortList = function(head) {
  if (head === null) {
    return null;
  }
  return mergeSort(head);

  function mergeSort(head) {
    if (head.next === null) {
      return head;
    }
    let p = head;
    let q = head;
    let pre = null;
    // 快慢指针寻找中间节点
    while (q != null && q.next !== null) {
      pre = p;
      p = p.next;
      q = q.next.next;
    }
    // 中间节点的前一个节点 断链
    pre.next = null;
    // 中间节点的前半部分
    const l = mergeSort(head);
    const r = mergeSort(p);
    return merge(l, r);
  }

  // 合并两个已排序的节点
  function merge(l, r) {
    const dummy = new ListNode(0);
    let cur = dummy;
    while (l != null && r != null) {
      if (l.val <= r.val) {
        cur.next = l;
        cur = cur.next;
        l = l.next;
      } else {
        cur.next = r;
        cur = cur.next;
        r = r.next;
      }
    }
    if (l != null) {
      cur.next = l;
    }
    if (r != null) {
      cur.next = r;
    }
    return dummy.next;
  }
};
