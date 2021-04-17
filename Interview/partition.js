/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// var partition = function (head, x) {
//   const less = []
//   const more = []
//   while (head) {
//     if (head.val < x) less.push(head.val)
//     else more.push(head.val)
//     head = head.next
//   }

//   const dummyNode = new ListNode()
//   let cur = dummyNode
//   for (let i = 0; i < less.length; i++) {
//     cur.next = new ListNode(less[i])
//     cur = cur.next
//   }
//   for (let i = 0; i < more.length; i++) {
//     cur.next = new ListNode(more[i])
//     cur = cur.next
//   }
//   return dummyNode.next
// }

var partition = function (head, x) {
  let cur = head
  let pre = head
  while (cur) {
    if (cur.val < x) {
      const tmp = pre.val
      pre.val = cur.val
      cur.val = tmp
      pre = pre.next
    }
    cur = cur.next
  }
  return head
}
