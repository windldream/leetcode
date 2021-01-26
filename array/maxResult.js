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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
  const n = nums.length
  const pq = new Heap((a, b) => a[0] - b[0] > 0)
  pq.insert([nums[0], 0])
  let ans = nums[0]
  for (let i = 1; i < n; i++) {
    while (i - pq.top()[1] > k) {
      pq.remove()
    }
    ans = pq.top()[0] + nums[i]
    pq.insert([ans, i])
  }
  return ans
}

maxResult([1, -5, -20, 4, -1, 3, -6, -3], 2)
