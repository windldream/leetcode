// 默认最小堆
const defaultComparator = function (a, b) {
  return a < b
}

class FastPriorityQueue {
  constructor(comparator) {
    if (!(this instanceof FastPriorityQueue)) return new FastPriorityQueue(comparator)
    this.array = []
    this.size = 0
    this.compare = comparator || defaultComparator
  }

  add(myval) {
    let i = this.size
    this.array[this.size] = myval
    this.size += 1
    let p
    let ap
    while (i > 0) {
      // 父节点
      p = (i - 1) >> 1
      ap = this.array[p]
      // 停止上浮
      if (!this.compare(myval, ap)) break
      this.array[i] = ap
      i = p
    }
    this.array[i] = myval
  }

  heapify(arr) {
    this.array = arr
    this.size = arr.length
    for (let i = this.size >> 1; i >= 0; i--) {
      this._percolateDown(i)
    }
  }

  // 上浮
  _percolateUp(i, force) {
    const myval = this.array[i]
    let p
    let ap
    while (i > 0) {
      // 父节点
      p = (i - 1) >> 1
      ap = this.array[p]
      if (!force && !this.compare(myval, ap)) break
      this.array[i] = ap
      i = p
    }
    this.array[i] = myval
  }

  // 下沉
  _percolateDown(i) {
    const size = this.size
    const hsize = this.size >>> 1
    const ai = this.array[i]
    let l
    let r
    let bestc
    while (i < hsize) {
      // 左子节点
      l = (i << 1) + 1
      // 右子节点
      r = l + 1
      bestc = this.array[l]
      if (r < size) {
        if (this.compare(this.array[r], bestc)) {
          l = r
          bestc = this.array[r]
        }
      }
      if (!this.compare(bestc, ai)) break
      this.array[i] = bestc
      i = l
    }
    this.array[i] = ai
  }

  // 删除索引为index的元素
  _removeAt(index) {
    if (index > this.size - 1 || index < 0) return undefined
    // 让索引为index上浮到堆顶
    this._percolateUp(index, true)
    return this.poll()
  }

  // 删除逻辑等于myval的元素
  remove(myval) {
    for (let i = 0; i < this.size; i++) {
      if (!this.compare(this.array[i], myval) && !this.compare(myval, this.array[i])) {
        this._removeAt(i)
        return true
      }
    }
    return false
  }

  // 获取堆顶元素
  peek() {
    if (this.size === 0) return undefined
    return this.array[0]
  }

  // 删除堆顶元素
  poll() {
    if (this.size === 0) return undefined
    const ans = this.array[0]
    if (this.size > 1) {
      this.array[0] = this.array[--this.size]
      this._percolateDown(0)
    } else {
      this.size -= 1
    }
    return ans
  }

  isEmpty() {
    return this.size === 0
  }
}

/**
 * // This is the GridMaster's API interface.
 * // You should not implement it, or speculate about its implementation
 * function GridMaster() {
 *
 *     @param {character} direction
 *     @return {boolean}
 *     this.canMove = function(direction) {
 *         ...
 *     };
 *     @param {character} direction
 *     @return {integer}
 *     this.move = function(direction) {
 *         ...
 *     };
 *     @return {boolean}
 *     this.isTarget = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {GridMaster} master
 * @return {integer}
 */
var findShortestPath = function (master) {
  const dirs = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1]
  }
  const back = {
    U: 'D',
    D: 'U',
    L: 'R',
    R: 'L'
  }
  const m = 201
  const n = 201
  const grid = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))
  const target = []
  rebuildGrid(grid, master, 100, 100, 0)
  if (target.length === 0) return -1

  const pq = new FastPriorityQueue((a, b) => a[2] < b[2])
  pq.add([100, 100, 0])
  while (!pq.isEmpty()) {
    const [x, y, w] = pq.poll()
    if (x === target[0] && y === target[1]) return w
    for (const key in dirs) {
      const [dx, dy] = dirs[key]
      const row = dx + x
      const col = dy + y
      if (row < 0 || (row >= m && col < 0) || col >= n || grid[row][col] <= 0) continue
      const k = w + grid[row][col]
      grid[row][col] = -1
      pq.add([row, col, k])
    }
  }
  return -1

  function rebuildGrid(grid, master, i, j) {
    for (const key in dirs) {
      const [dx, dy] = dirs[key]
      if (master.canMove(key)) {
        const weight = master.move(key)
        const x = dx + i
        const y = dy + j
        if (master.isTarget()) {
          target[0] = x
          target[1] = y
        }
        if (grid[x][y] >= 1) {
          master.move(back[key])
          continue
        }
        grid[x][y] = weight
        rebuildGrid(grid, master, x, y)
        master.move(back[key])
      }
    }
  }
}
