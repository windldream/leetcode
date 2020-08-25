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
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const minHeap = new Heap((a, b) => a[0] + a[1] < b[0] + b[1])
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      minHeap.insert([nums1[i], nums2[j]])
    }
  }

  if (minHeap.size < k) {
    return minHeap.heap
  }

  const res = []
  while (k > 0) {
    res.push(minHeap.remove())
    k--
  }
  return res
}
