class Node {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = new Node()
  this.size = 0
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.size) return -1
  let i = 0
  let cur = this.head
  while (cur && i < index) {
    cur = cur.next
    i++
  }
  return cur.val
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  if (this.size === 0) {
    this.head = new Node(val)
  } else {
    const node = new Node(val)
    node.next = this.head
    this.head = node
  }
  this.size += 1
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let cur = this.head
  while (cur && cur.next) {
    cur = cur.next
  }
  cur.next = new Node(val)
  this.size += 1
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return
  if (index <= 0) {
    this.addAtHead(val)
    return
  }
  if (index === this.size) {
    this.addAtTail(val)
    return
  }
  let i = 1
  let cur = this.head
  while (cur && i < index) {
    cur = cur.next
    i++
  }
  const next = cur.next
  cur.next = new Node(val)
  cur.next.next = next
  this.size += 1
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size || index < 0) return
  if (index === 0) {
    if (this.size === 1) {
      this.head = new Node()
    } else {
      let cur = this.head
      cur.val = cur.next.val
      cur.next = cur.next.next
    }
  } else {
    let cur = this.head
    let i = 0
    while (cur && i < index - 1) {
      cur = cur.next
      i++
    }
    cur.next = cur.next.next
  }
  this.size -= 1
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
