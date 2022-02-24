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

  // 浅复制堆
  clone() {
    const fpq = new FastPriorityQueue(this.compare)
    fpq.size = this.size
    for (let i = 0; i < this.size; i++) {
      fpq.array.push(this.array[i])
    }
    return fpq
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

  _batchRemove(callback, limit) {
    const ans = Array(limit ? limit : this.size)
    let count = 0

    if (typeof callback === 'function' && this.size) {
      let i = 0
      while (i < this.size && count < ans.length) {
        if (callback(this.array[i])) {
          ans[count++] = this._removeAt(i)
          // 将 i 指向父元素
          i = i >> 1
        } else {
          i++
        }
      }
    }
    ans.length = count
    return ans
  }

  removeOne(callback) {
    const arr = this._batchRemove(callback, 1)
    return arr.length > 0 ? arr[0] : undefined
  }

  removeMany(callback, limit) {
    return this._batchRemove(callback, limit)
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

  replaceTop(myval) {
    if (this.size === 0) return undefined
    const ans = this.array[0]
    this.array[0] = myval
    this._percolateDown(0)
    return ans
  }

  trim() {
    this.array = this.array.slice(0, this.size)
  }

  isEmpty() {
    return this.size === 0
  }

  forEach(callback) {
    if (this.isEmpty() || typeof callback !== 'function') return
    let i = 0
    const fpq = this.clone()
    while (!fpq.isEmpty()) {
      callback(fpq.poll(), i++)
    }
  }

  // 最小的 k 个元素
  kSmallest(k) {
    if (this.size === 0) return []
    const comparator = this.compare
    const arr = this.array
    const fpq = new FastPriorityQueue((a, b) => {
      return comparator(arr[a], arr[b])
    })
    k = Math.min(this.size, k)
    const smallest = Array(k)

    let j = 0
    fpq.add(0)
    while (j < k) {
      const small = fpq.poll()
      smallest[j++] = this.array[small]
      const lp = (small << 1) + 1
      const rp = lp + 1
      if (lp < this.size) fpq.add(lp)
      if (rp < this.size) fpq.add(rp)
    }
    return smallest
  }
}

/**
 * @param {number[][]} grid
 * @param {number[]} pricing
 * @param {number[]} start
 * @param {number} k
 * @return {number[][]}
 */
var highestRankedKItems = function (grid, pricing, start, k) {
  const fq = new FastPriorityQueue(reverseComparator)

  const queue = [start]
  const n = grid.length
  const m = grid[0].length
  const dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0]
  ]
  const visited = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false))
  visited[start[0]][start[1]] = true
  let step = 0

  while (queue.length) {
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const [r, c] = queue.shift()

      if (grid[r][c] >= pricing[0] && grid[r][c] <= pricing[1]) {
        if (fq.size < k) {
          fq.add([step, grid[r][c], r, c])
        } else {
          if (comparator([step, grid[r][c], r, c], fq.peek())) {
            fq.poll()
            fq.add([step, grid[r][c], r, c])
          }
        }
      }

      for (const [dx, dy] of dirs) {
        const x = r + dx
        const y = c + dy

        if (x >= 0 && x < n && y >= 0 && y < m && grid[x][y] !== 0 && !visited[x][y]) {
          queue.push([x, y])
          visited[x][y] = true
        }
      }
    }

    step += 1
  }

  const ans = []

  while (!fq.isEmpty()) {
    const top = fq.poll()
    ans.push([top[2], top[3]])
  }

  return ans.reverse()

  function comparator(a, b) {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        if (a[2] === b[2]) {
          return a[3] < b[3]
        }

        return a[2] < b[2]
      }

      return a[1] < b[1]
    }

    return a[0] < b[0]
  }

  function reverseComparator(a, b) {
    return !comparator(a, b)
  }
}
