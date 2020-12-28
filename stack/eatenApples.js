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
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
const eatenApples = function (apples, days) {
  const n = apples.length
  const pq = new Heap((a, b) => a - b < 0)
  const map = new Map()
  let count = 0
  for (let i = 0; i < n; i++) {
    if (apples[i] === 0) {
      while (pq.top() < i + 1) {
        const val = pq.remove()
        map.set(val, 0)
      }
      if (pq.size()) {
        del(pq, map)
        count++
      }
    } else {
      let num = apples[i]
      const day = i + days[i]
      if (pq.top() < day) {
        while (pq.top() < i + 1) {
          pq.remove()
        }
        if (pq.size()) {
          del(pq, map)
        } else {
          num--
        }
        pq.insert(day)
        map.set(day, num)
      } else {
        if (num - 1 > 0) {
          pq.insert(day)
          map.set(day, num - 1)
        }
      }
      count++
    }
  }

  let day = n + 1
  while (pq.size()) {
    while (pq.top() < day) {
      pq.remove()
    }
    if (pq.size()) {
      del(pq, map)
      count++
    } else {
      break
    }
    day++
  }

  return count

  function del(pq, map) {
    const val = pq.top()
    if (map.get(val) > 0) {
      map.set(val, map.get(val) - 1)
    } else {
      const top = pq.remove()
      map.set(val, map.get(top) - 1)
    }
  }
}

eatenApples([1], [2])
