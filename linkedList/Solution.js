/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head
}

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let head = this.head
  let val = head.val
  let count = 1
  while (head) {
    if (Math.floor(Math.random() * count) === 0) {
      val = head.val
    }
    head = head.next
    count++
  }
  return val
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
