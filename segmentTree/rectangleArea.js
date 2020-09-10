class Node {
  constructor(start, end, x) {
    this.start = start
    this.end = end
    this.x = x
    this.left = null
    this.right = null
    this.count = 0
    this.total = 0
  }

  getRangeMid() {
    return this.start + ((this.end - this.start) >> 1)
  }

  getLeft() {
    if (this.left === null) {
      this.left = new Node(this.start, this.getRangeMid(), this.x)
    }
    return this.left
  }

  getRight() {
    if (this.right === null) {
      this.right = new Node(this.getRangeMid(), this.end, this.x)
    }
    return this.right
  }

  update(i, j, val) {
    if (i >= j) return 0
    if (this.start == i && this.end === j) {
      this.count = this.count + val
    } else {
      this.getLeft().update(i, Math.min(this.getRangeMid(), j), val)
      this.getRight().update(Math.max(this.getRangeMid(), i), j, val)
    }
    if (this.count > 0) {
      this.total = this.x[this.end] - this.x[this.start]
    } else {
      this.total = this.getLeft().total + this.getRight().total
    }
    return this.total
  }
}

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function (rectangles) {
  const OPEN = 1
  const CLOSE = -1
  const MOD = BigInt(10 ** 9 + 7)
  const len = rectangles.length
  const events = Array(len * 2)
    .fill(0)
    .map(() => [])
  const xVals = new Set()
  let t = 0
  for (const [x1, y1, x2, y2] of rectangles) {
    events[t++] = [y1, OPEN, x1, x2]
    events[t++] = [y2, CLOSE, x1, x2]
    xVals.add(x1)
    xVals.add(x2)
  }

  events.sort((a, b) => a[0] - b[0])
  const xs = [...xVals].sort((a, b) => a - b)
  const xMap = new Map()
  for (let i = 0; i < xs.length; i++) {
    xMap.set(xs[i], i)
  }

  const active = new Node(0, xs.length, xs)
  let ans = BigInt(0)
  let curSum = BigInt(0)
  let curY = events[0][0]
  for (const [y, state, x1, x2] of events) {
    ans = (ans + curSum * BigInt(y - curY)) % MOD
    curSum = BigInt(active.update(xMap.get(x1), xMap.get(x2), state))
    curY = y
  }

  return ans
}
