/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// var reversePrint = function (head) {
//   head = reverseNode(head)
//   const ans = []
//   while (head) {
//     ans.push(head.val)
//     head = head.next
//   }
//   return ans

//   function reverseNode(head) {
//     if (head === null || head.next === null) return head
//     let last = reverseNode(head.next)
//     head.next.next = head
//     head.next = null
//     return last
//   }
// }

// var reversePrint = function (head) {
//   const ans = []
//   dfs(head)
//   return ans

//   function dfs(head) {
//     if (head === null) return
//     dfs(head.next)
//     ans.push(head.val)
//   }
// }

// var reversePrint = function (head) {
//   const ans = []
//   while (head) {
//     ans.push(head.val)
//     head = head.next
//   }
//   return ans.reverse()
// }

var reversePrint = function (head) {
  if (head === null) return []

  let prev = null
  while (head) {
    const last = head.next
    head.next = prev
    prev = head
    head = last
  }

  const ans = []
  while (prev) {
    ans.push(prev.val)
    prev = prev.next
  }
  return ans
}
