class Heap {
  constructor(compare = (a, b) => a - b > 0) {
    this.heap = []
    this.compare = compare
  }

  size() {
    return this.heap.length
  }

  top() {
    return this.heap[0]
  }

  insert(item) {
    this.heap.push(item)
    this.up(this.size() - 1)
  }

  remove() {
    const delItem = this.heap[0]
    this.swap(this.size() - 1, 0)
    this.heap.length -= 1
    this.down(0)
    return delItem
  }

  down(k) {
    let left = k * 2 + 1,
      right = k * 2 + 2,
      largest = k

    if (left < this.size() && this.compare(this.heap[left], this.heap[largest])) {
      largest = left
    }

    if (right < this.size() && this.compare(this.heap[right], this.heap[largest])) {
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
  this.pq = new Heap((a, b) => a - b < 0)
  for (const num of nums) {
    if (this.pq.size() < k) {
      this.pq.insert(num)
    } else {
      if (this.pq.top() < num) {
        this.pq.remove()
        this.pq.insert(num)
      }
    }
  }
  this.k = k
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.pq.size() < this.k) {
    this.pq.insert(val)
    return this.pq.top()
  }
  if (this.pq.top() > val) return this.pq.top()
  this.pq.remove()
  this.pq.insert(val)
  return this.pq.top()
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
