class Heap {
  constructor(compare) {
    this.heap = []
    this.size = 0
    this.compare =
      compare ||
      function (a, b) {
        return a - b > 0
      }
  }

  insert(item) {
    this.heap.push(item)
    this.size += 1
    this.up(this.size - 1)
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
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.heap = new Heap((a, b) => a - b < 0)
  this.k = k
  for (const num of nums) {
    this.add(num)
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.heap.size < this.k) {
    this.heap.insert(val)
  } else {
    if (val > this.heap.heap[0]) {
      this.heap.remove()
      this.heap.insert(val)
    }
  }

  return this.heap.heap[0]
}

var obj = new KthLargest(3, [4, 5, 8, 2])
var param_1 = obj.add(3)

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
