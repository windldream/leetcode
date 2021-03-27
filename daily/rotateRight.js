/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var rotateRight = function (head, k) {
//   if (head === null || head.next === null || k === 0) return head

//   let n = 1
//   let tmp = head
//   while (tmp.next) {
//     tmp = tmp.next
//     n += 1
//   }
//   k = k % n
//   if (k === 0) return head

//   tmp.next = head
//   for (let i = 0; i < n - k; i++) {
//     tmp = tmp.next
//   }
//   const ans = tmp.next
//   tmp.next = null
//   return ans
// }

var rotateRight = function (head, k) {
  if (head === null || head.next === null || k === 0) return head

  let n = 1
  let tmp = head
  while (tmp.next) {
    tmp = tmp.next
    n += 1
  }
  k = k % n
  if (k === 0) return head

  let fast = head
  let slow = head
  while (k) {
    fast = fast.next
    k--
  }

  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  fast.next = head
  const newHead = slow.next
  slow.next = null
  return newHead
}

// [1, 2, 3, 4, 5]   5 -> 1 -> 2 -> 3 -> 4 -> 5

// 1

// [3, 4, 5] fast
// [1, 2, 3, 4, 5] slow

// [4, 5]
// [2, 3, 4, 5]

// [5]
// [3, 4, 5]

// []
// [4, 5]
