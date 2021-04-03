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
// var copyRandomList = function (head) {
//   const cache = new Map()
//   let tmp = head
//   while (tmp) {
//     const clone = new Node(tmp.val)
//     cache.set(tmp, clone)
//     tmp = tmp.next
//   }

//   let cur = head
//   while (cur) {
//     cache.get(cur).next = cur.next ? cache.get(cur.next) : null
//     cache.get(cur).random = cur.random ? cache.get(cur.random) : null
//     cur = cur.next
//   }
//   return cache.get(head)
// }

var copyRandomList = function (head) {
  const cache = new Map()
  return dfs(head)

  function dfs(head) {
    if (head === null) return head
    if (cache.has(head)) return cache.get(head)
    const clone = new Node(head.val)
    cache.set(head, clone)
    clone.next = dfs(head.next)
    clone.random = dfs(head.random)
    return clone
  }
}
