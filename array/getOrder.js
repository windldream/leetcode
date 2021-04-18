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
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
  const arr = []
  for (let i = 0; i < tasks.length; i++) {
    arr.push([tasks[i][0], tasks[i][1], i])
  }
  arr.sort((a, b) => (a[0] === b[0] ? a[2] - b[2] : a[0] - b[0]))

  const pq = new FastPriorityQueue((a, b) => (a[0] === b[0] ? a[1] < b[1] : a[0] < b[0]))
  const ans = []
  let time = 0
  let idx = 0
  for (let i = 0; i < arr.length; i++) {
    if (pq.isEmpty()) {
      time = Math.max(time, arr[idx][0])
    }
    while (idx < arr.length && arr[idx][0] <= time) {
      pq.add([arr[idx][1], arr[idx][2]])
      idx++
    }
    const [process, index] = pq.poll()
    ans.push(index)
    time += process
  }

  while (!pq.isEmpty()) {
    const task = pq.poll()
    ans.push(task[2])
  }
  return ans
}

getOrder([
  [7, 10],
  [7, 12],
  [7, 5],
  [7, 4],
  [7, 2]
])
