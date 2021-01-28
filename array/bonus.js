/**
 * @param {number} n
 * @param {number[][]} leadership
 * @param {number[][]} operations
 * @return {number[]}
 */
const mod = 10 ** 9 + 7
let seqs = undefined
let lasts = undefined
let arr = undefined
let seq = undefined
var bonus = function (n, leadership, operations) {
  arr = new Array(n + 1)
  for (let i = 0; i <= n; i++) arr[i] = []
  for (let x of leadership) {
    arr[x[0]].push(x[1])
  }

  seqs = new Array(n + 1)
  lasts = new Array(n + 1)
  seq = -1
  bfs(1)

  const ans = []
  const tree = new Node(0, n - 1)
  for (let x of operations) {
    if (x[0] === 1) {
      tree.update(seqs[x[1]], seqs[x[1]], x[2])
    } else if (x[0] === 2) {
      tree.update(seqs[x[1]], lasts[x[1]], x[2])
    } else ans.push(tree.query(seqs[x[1]], lasts[x[1]], 0))
  }
  return ans
}

function bfs(node) {
  seqs[node] = ++seq
  for (let x of arr[node]) bfs(x)
  lasts[node] = seq
}

function Node(start, end) {
  this.start = start
  this.end = end
  this.mid = Math.floor((start + end) / 2)
  this.sum = 0
  this.val = 0
  this.left = null
  this.right = null
  this.generateChild()
}

Node.prototype.generateChild = function () {
  if (this.start === this.end) return null
  if (this.left === null) this.left = new Node(this.start, this.mid)
  if (this.right === null) this.right = new Node(this.mid + 1, this.end)
}

Node.prototype.update = function (start, end, newVal) {
  this.sum += (end - start + 1) * newVal
  this.sum %= mod
  if (this.start === start && this.end === end) {
    this.val += newVal
    return
  }

  if (end <= this.mid) {
    this.left.update(start, end, newVal)
  } else if (start > this.mid) {
    this.right.update(start, end, newVal)
  } else {
    this.left.update(start, this.mid, newVal)
    this.right.update(this.mid + 1, end, newVal)
  }
}

Node.prototype.query = function (start, end, addVal) {
  let res = 0
  if (this.start === start && this.end === end) {
    res = this.sum + addVal * (end - start + 1)
    res %= mod
    return res
  }
  addVal += this.val
  if (end <= this.mid) {
    res = this.left.query(start, end, addVal)
  } else if (start > this.mid) {
    res = this.right.query(start, end, addVal)
  } else {
    res += this.left.query(start, this.mid, addVal)
    res %= mod
    res += this.right.query(this.mid + 1, end, addVal)
  }
  return res % mod
}
