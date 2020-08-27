class Heap {
  constructor(compare = (a, b) => a > b) {
    this.heap = []
    this.size = 0
    this.compare = compare
  }

  insert(item) {
    this.heap.push(item)
    this.size += 1
    this.up(this.size - 1)
  }

  top() {
    return this.heap[0]
  }

  remove() {
    const delItem = this.heap[0]
    this.swap(this.size - 1, 0)
    this.size -= 1
    this.heap.length -= 1
    this.down(0)
    return delItem
  }

  down(k) {
    let left = k * 2 + 1,
      right = k * 2 + 2,
      largest = k

    if (left < this.size && this.compare(this.heap[left], this.heap[largest])) {
      largest = left
    }

    if (right < this.size && this.compare(this.heap[right], this.heap[largest])) {
      largest = right
    }

    if (largest !== k) {
      this.swap(k, largest)
      this.down(largest)
    }
  }

  up(k) {
    let parent = Math.floor((k - 1) / 2)
    while (k > 0 && this.compare(this.heap[k], this.heap[parent])) {
      this.swap(k, parent)
      k = parent
      parent = Math.floor((parent - 1) / 2)
    }
  }

  swap(i, j) {
    const tmp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = tmp
  }
}
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.maxHeap = new Heap()
  this.minHeap = new Heap((a, b) => a - b < 0)
  this.size = 0
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.minHeap.size === 0) {
    this.minHeap.insert(num)
  } else if (this.maxHeap.size === 0) {
    if (this.minHeap.top() < num) {
      const del = this.minHeap.remove()
      this.minHeap.insert(num)
      this.maxHeap.insert(del)
    } else {
      this.maxHeap.insert(num)
    }
  } else {
    if (num < this.maxHeap.top()) {
      if (this.maxHeap.size < this.minHeap.size) {
        this.maxHeap.insert(num)
      } else {
        const del = this.maxHeap.remove()
        this.maxHeap.insert(num)
        this.minHeap.insert(del)
      }
    } else if (num > this.minHeap.top()) {
      if (this.minHeap.size <= this.maxHeap.size) {
        this.minHeap.insert(num)
      } else {
        const del = this.minHeap.remove()
        this.minHeap.insert(num)
        this.maxHeap.insert(del)
      }
    } else {
      if (this.minHeap.size <= this.maxHeap.size) {
        this.minHeap.insert(num)
      } else {
        this.maxHeap.insert(num)
      }
    }
  }
  this.size += 1
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.size % 2) {
    return this.minHeap.top()
  } else {
    return (this.maxHeap.top() + this.minHeap.top()) / 2
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
