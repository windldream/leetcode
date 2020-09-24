// 树状数组
class FenwichTree {
  constructor(nums) {
    this.sums = Array(nums.length + 1).fill(0)
    this.nums = nums
    for (let i = 0; i < nums.length; i++) {
      this.updateBit(i + 1, nums[i])
    }
  }

  update(i, val) {
    this.updateBit(i + 1, val - this.nums[i])
    this.nums[i] = val
  }

  updateBit(i, diff) {
    while (i < this.sums.length) {
      this.sums[i] += diff
      i += this.lowBit(i)
    }
  }

  sumRange(i, j) {
    return this.preSum(j + 1) - this.preSum(i)
  }

  preSum(i) {
    let sum = 0
    while (i > 0) {
      sum += this.sums[i]
      i -= this.lowBit(i)
    }
    return sum
  }

  lowBit(i) {
    return i & -i
  }
}

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var minInteger = function (num, k) {
  const idLists = Array(10)
    .fill(0)
    .map(() => [])

  const len = num.length
  for (let i = 0; i < len; i++) {
    idLists[num[i]].push(i)
  }

  const ids = Array(10).fill(0)
  const seen = Array(len).fill(false)
  const res = []
  const fenwichTree = new FenwichTree(Array(len).fill(0))
  outer: for (let i = 0; i < len; i++) {
    if (seen[i]) continue

    const cur = +num[i]
    for (let j = 0; j < cur; j++) {
      while (ids[j] < idLists[j].length && idLists[j][ids[j]] < i) {
        ids[j] += 1
      }
      if (ids[j] === idLists[j].length) continue
      const index = idLists[j][ids[j]]
      const seenNum = fenwichTree.sumRange(0, index - 1)
      if (index - seenNum <= k) {
        k -= index - seenNum
        ids[j]++
        seen[index] = true
        fenwichTree.update(index, 1)
        i--
        res.push(j)
        continue outer
      }
    }

    seen[i] = true
    fenwichTree.update(i, 1)
    res.push(cur)
  }

  return res.join('')
}
