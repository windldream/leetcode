class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.head = null
  this.tail = null
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  const node = new Node(x)
  if (this.head === null) {
    this.head = node
    this.tail = node
  } else {
    const tail = this.tail
    tail.next = node
    node.prev = tail
    this.tail = node
  }
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const head = this.head
  if (head === null) return null
  if (head.next === null) {
    this.head = null
    this.tail = null
    return head.val
  }
  head.next.prev = null
  this.head = head.next
  head.next = null
  return head.val
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.head.val
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.head === null
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
