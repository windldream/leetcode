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
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// var getLeastNumbers = function (arr, k) {
//   const pq = new FastPriorityQueue((a, b) => a > b)
//   for (const num of arr) {
//     if (pq.size < k) {
//       pq.add(num)
//     } else {
//       if (pq.peek() > num) {
//         pq.poll()
//         pq.add(num)
//       }
//     }
//   }
//   return pq.array
// }

var getLeastNumbers = function (arr, k) {
  if (k === 0) return []
  if (k >= arr.length) return arr
  partitionArray(arr, 0, arr.length - 1, k)
  return arr.slice(0, k)

  function partitionArray(arr, lo, hi, k) {
    const m = partition(arr, lo, hi)
    if (k === m) return
    if (k < m) partitionArray(arr, lo, m - 1, k)
    else partitionArray(arr, m + 1, hi, k)
  }

  function partition(arr, lo, hi) {
    let i = lo
    let j = hi + 1
    const base = arr[lo]
    while (true) {
      while (arr[++i] < base) {
        if (i === hi) break
      }
      while (arr[--j] > base) {
        if (j === lo) break
      }
      if (i >= j) break
      swap(arr, i, j)
    }
    swap(arr, lo, j)
    return j
  }

  function swap(arr, i, j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
}
