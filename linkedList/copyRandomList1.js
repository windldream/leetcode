/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) return head

  const map = new Map()
  let cur = head
  while (cur) {
    const clone = new Node(cur.val, null, null)
    map.set(cur, clone)
    cur = cur.next
  }

  cur = head
  while (cur) {
    map.get(cur).next = cur.next ? map.get(cur.next) : null
    map.get(cur).random = cur.random ? map.get(cur.random) : null
    cur = cur.next
  }

  return map.get(head)
}
