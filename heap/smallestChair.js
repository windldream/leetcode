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
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function (times, targetFriend) {
  const n = times.length
  const pos = new FastPriorityQueue()
  const arrivalQueue = new FastPriorityQueue((a, b) => a[0] < b[0])
  const leavingQueue = new FastPriorityQueue((a, b) => a[1] < b[1])

  for (let i = 0; i < n; i++) {
    arrivalQueue.add([times[i][0], times[i][1], i, 0])
  }

  let emptyPos = 0

  while (!arrivalQueue.isEmpty()) {
    let [arrival, leaving, idx, seat] = arrivalQueue.poll()

    // 离开时间小于到达时间，说明到达的人可以复用之前的座位
    while (!leavingQueue.isEmpty() && leavingQueue.peek()[1] <= arrival) {
      pos.add(leavingQueue.poll()[3])
    }

    // 如果有空闲座位
    if (!pos.isEmpty()) {
      seat = pos.poll()
    } else {
      seat = emptyPos++
    }

    // 座位被占领
    leavingQueue.add([arrival, leaving, idx, seat])

    if (idx === targetFriend) return seat
  }

  return -1
}
