class Node {
  constructor(r, d, val) {
    this.right = r
    this.down = d
    this.val = val
  }
}

const rand = function () {
  return Math.floor(Math.random() * 2)
}

var Skiplist = function () {
  this.head = new Node(null, null, 0)
  this.stack = Array(64)
    .fill(0)
    .map(() => new Node())
}

/**
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function (target) {
  let p = this.head
  while (p) {
    while (p.right && p.right.val < target) {
      p = p.right
    }
    if (p.right && p.right.val === target) {
      return true
    }
    p = p.down
  }
  return false
}

/**
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function (num) {
  let lv = -1
  let p = this.head
  while (p) {
    while (p.right && p.right.val < num) {
      p = p.right
    }
    this.stack[++lv] = p
    p = p.down
  }

  let insertUp = true
  let downNode = null
  while (insertUp && lv >= 0) {
    const insert = this.stack[lv--]
    insert.right = new Node(insert.right, downNode, num)
    downNode = insert.right
    insertUp = (rand() & 1) === 0
  }
  if (insertUp) {
    this.head = new Node(new Node(null, downNode, num), this.head, 0)
  }
}

/**
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function (num) {
  let exist = false
  let p = this.head
  while (p) {
    while (p.right && p.right.val < num) {
      p = p.right
    }
    if (p.right && p.right.val === num) {
      exist = true
      p.right = p.right.right
    }
    p = p.down
  }
  return exist
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */
