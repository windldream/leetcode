/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
// var maximizeXor = function (nums, queries) {
//   nums.sort((a, b) => a - b)

//   const ans = []
//   for (const [x, y] of queries) {
//     const idx = search(nums, y)
//     if (idx === -1) ans.push(idx)
//     else {
//       let max = x ^ nums[0]
//       for (let i = 1; i <= idx; i++) {
//         max = Math.max(max, nums[i] ^ x)
//       }
//       ans.push(max)
//     }
//   }
//   return ans

//   function search(nums, t) {
//     let l = 0
//     let r = nums.length - 1
//     let ans = -1
//     while (l <= r) {
//       const mid = (l + r) >> 1
//       if (nums[mid] > t) {
//         r = mid - 1
//       } else {
//         l = mid + 1
//         ans = mid
//       }
//     }
//     return ans
//   }
// }

class Trie {
  constructor() {
    this.lo = Infinity
    this.children = new Map()
  }
}

var maximizeXor = function (nums, queries) {
  const root = new Trie()
  for (const num of nums) {
    let cur = root
    for (let i = 30; i >= 0; i--) {
      const next = num & (1 << i) ? 1 : 0
      if (!cur.children.has(next)) cur.children.set(next, new Trie())
      cur = cur.children.get(next)
      cur.lo = Math.min(cur.lo, num)
    }
  }

  const ans = []
  for (const [x, limt] of queries) {
    let max = 0
    let cur = root
    for (let i = 30; i >= 0; i--) {
      if (x & (1 << i)) {
        if (cur.children.has(0)) {
          cur = cur.children.get(0)
          max ^= 1 << i
        } else if (!cur.children.has(1) || cur.children.get(1).lo > limt) {
          ans.push(-1)
          break
        } else {
          cur = cur.children.get(1)
        }
      } else {
        if (cur.children.has(1) && cur.children.get(1).lo <= limt) {
          cur = cur.children.get(1)
          max ^= 1 << i
        } else if (!cur.children.has(0)) {
          ans.push(-1)
          break
        } else {
          cur = cur.children.get(0)
        }
      }
      if (i === 0) {
        ans.push(max)
      }
    }
  }
  return ans
}

maximizeXor([5, 8, 0, 3, 2, 10, 9, 2, 4, 5], [[3, 8]])
