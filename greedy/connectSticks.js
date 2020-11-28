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
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function (sticks) {
  const len = sticks.length
  if (len === 1) return 0
  const pq = new Heap((a, b) => b - a > 0)
  for (let i = 0; i < len; i++) {
    pq.insert(sticks[i])
  }

  let sum = 0
  let cur = 0
  while (pq.size() > 1) {
    cur = pq.remove() + pq.remove()
    sum += cur
    pq.insert(cur)
  }
  return sum
}

connectSticks([3354, 4316, 3259, 4904, 4598, 474, 3166, 6322, 8080, 9009])
