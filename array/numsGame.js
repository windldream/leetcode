class Heap {
  constructor(compare = (a, b) => a - b > 0) {
    this.heap = []
    this.compare = compare
    this.sum = 0n
  }

  size() {
    return this.heap.length
  }

  top() {
    return this.heap[0]
  }

  insert(item) {
    this.heap.push(item)
    this.sum += BigInt(item)
    this.up(this.size() - 1)
  }

  remove() {
    const delItem = this.heap[0]
    this.swap(this.size() - 1, 0)
    this.heap.length -= 1
    this.down(0)
    this.sum -= BigInt(delItem)
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
 * @return {number[]}
 */
var numsGame = function (nums) {
  const mod = BigInt(10 ** 9 + 7)
  const n = nums.length
  if (n === 1) return [0]

  for (let i = 0; i < n; i++) {
    nums[i] -= i
  }
  const minpq = new Heap()
  const maxpq = new Heap((a, b) => a - b < 0)

  minpq.insert(Math.min(nums[0], nums[1]))
  maxpq.insert(Math.max(nums[0], nums[1]))
  const ans = [0, maxpq.sum - minpq.sum]
  for (let i = 2; i < n; i++) {
    if (nums[i] <= minpq.top()) {
      minpq.insert(nums[i])
    } else {
      maxpq.insert(nums[i])
    }

    if (minpq.size() === maxpq.size() + 2) {
      const top = minpq.remove()
      maxpq.insert(top)
    } else if (minpq.size() + 1 === maxpq.size()) {
      const top = maxpq.remove()
      minpq.insert(top)
    }

    const res = i & 1 ? maxpq.sum - minpq.sum : maxpq.sum - minpq.sum + BigInt(minpq.top())
    ans.push(res % mod)
  }
  return ans
}

numsGame([3, 4, 5, 1, 6, 7])
