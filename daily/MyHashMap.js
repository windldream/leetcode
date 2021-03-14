class Node {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.next = null
  }
}
/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  this.nodes = Array(10009).fill(null)
}

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const idx = this.getIndex(key)
  const head = this.nodes[idx]
  let tmp = head
  if (head) {
    let prev = null
    while (tmp) {
      if (tmp.key === key) {
        tmp.val = value
        return
      }
      prev = tmp
      tmp = tmp.next
    }
    tmp = prev
  }

  const node = new Node(key, value)
  if (tmp) {
    tmp.next = node
  } else {
    this.nodes[idx] = node
  }
}

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const idx = this.getIndex(key)
  let head = this.nodes[idx]
  while (head) {
    if (head.key === key) return head.val
    head = head.next
  }
  return -1
}

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const idx = this.getIndex(key)
  let head = this.nodes[idx]
  if (head) {
    let prev = null
    while (head) {
      if (head.key === key) {
        if (prev) {
          prev.next = head.next
        } else {
          this.nodes[idx] = head.next
        }
        return
      }
      prev = head
      head = head.next
    }
  }
}

MyHashMap.prototype.getIndex = function (key) {
  const hash = key ^ (key >>> 16)
  return hash % this.nodes.length
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
