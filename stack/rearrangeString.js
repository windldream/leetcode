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
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function (s, k) {
  if (k === 0) return s

  const sum = Array(26).fill(0)
  for (const c of s) {
    sum[c.charCodeAt() - 'a'.charCodeAt()] += 1
  }

  const pq = new Heap((a, b) => a[0] - b[0] > 0)
  for (let i = 0; i < 26; i++) {
    if (sum[i] > 0) pq.insert([sum[i], i])
  }

  let ans = ''
  const win = []
  while (pq.size() > 0) {
    const maxv = pq.remove()[1]
    if (win.includes(maxv)) break
    win.push(maxv)
    ans += String.fromCharCode(maxv + 'a'.charCodeAt())
    sum[maxv]--
    if (win.length === k) {
      const front = win.shift()
      if (sum[front] > 0) {
        pq.insert([sum[front], front])
      }
    }
  }
  return ans.length === s.length ? ans : ''
}

rearrangeString('aaadbbcc', 2)
