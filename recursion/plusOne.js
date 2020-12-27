/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const plusOne = function(head) {
  let str = getStr(head)
  str = addOne(str)
  let node = new ListNode()
  const tmp = node
  let i = 0
  while (i < str.length) {
    node.next = new ListNode(str[i])
    node = node.next
    i++
  }
  return tmp.next

  function addOne(str) {
    let n = str.length - 1
    let carry = 1
    let ans = ''
    while (n >= 0 || carry) {
      let sum =( n >= 0 ? +str[n] : 0) + carry
      if (sum >= 10) {
        sum = sum - 10
        carry = 1
      } else {
        carry = 0
      }
      ans = sum + ans
      n--
    }
    return ans
  }

  function getStr(head) {
    let str = ''
    while (head) {
      str += head.val
      head = head.next
    }
    return str
  }
};