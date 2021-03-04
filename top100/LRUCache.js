class Node {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoubleList {
  constructor(head, tail) {
    this.head = null
    this.tail = null
  }

  addFirst(node) {
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      const head = this.head
      // 将当前节点的prev指针指向node
      head.prev = node
      // 将node的prev指针指向当前节点
      node.next = head
      this.head = node
    }
  }

  remove(node) {
    if (this.head === node && this.tail === node) {
      this.head = null
      this.tail = null
    } else if (this.head === node) {
      node.next.prev = null
      this.head = node.next
    } else if (this.tail === node) {
      node.prev.next = null
      this.tail = node.prev
    } else {
      node.prev.next = node.next
      node.next.prev = node.prev
    }
  }

  removeLast() {
    const node = this.tail
    this.remove(this.tail)
    return node
  }
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map()
  this.limit = capacity
  this.list = new DoubleList()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const val = this.cache.get(key).val
    this.put(key, val)
    return val
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = new Node(key, value)
  if (this.cache.has(key)) {
    this.list.remove(this.cache.get(key))
    this.list.addFirst(node)
    this.cache.set(key, node)
  } else {
    if (this.cache.size === this.limit) {
      const last = this.list.removeLast()
      this.cache.delete(last.key)
    }
    this.list.addFirst(node)
    this.cache.set(key, node)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
