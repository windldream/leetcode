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
 * @param {number[][]} paths
 * @param {number} cnt
 * @param {number} start
 * @param {number} end
 * @param {number[]} charge
 * @return {number}
 */
var electricCarPlan = function (paths, cnt, start, end, charge) {
  const n = charge.length
  const dist = Array(n)
    .fill(0)
    .map(() => Array(cnt + 1).fill(Infinity))
  dist[start][0] = 0
  const g = Array(n)
    .fill(0)
    .map(() => new Map())
  for (const [u, v, w] of paths) {
    if (g[u].has(v)) {
      g[u].set(v, Math.min(w, g[u].get(v)))
    } else {
      g[u].set(v, w)
    }
    if (g[v].has(u)) {
      g[v].set(u, Math.min(w, g[v].get(u)))
    } else {
      g[v].set(u, w)
    }
  }
  const pq = new FastPriorityQueue((a, b) => a[0] < b[0])
  pq.add([0, start, 0])
  while (!pq.isEmpty()) {
    const [t, u, c] = pq.poll()
    if (t > dist[u][c]) continue
    if (u === end) return t

    // 当前电不满，充电一分钟，状态变为(u, c + 1)
    if (c < cnt) {
      const nt = t + charge[u]
      if (nt < dist[u][c + 1]) {
        dist[u][c + 1] = nt
        pq.add([nt, u, c + 1])
      }
    }

    // 如果一条边(u, v, w)能走，尝试走这条边，状态变为(v, c - w)
    for (const [v, w] of g[u]) {
      if (c >= w && t + w < dist[v][c - w]) {
        dist[v][c - w] = t + w
        pq.add([t + w, v, c - w])
      }
    }
  }

  return -1
}
