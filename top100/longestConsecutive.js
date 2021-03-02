/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0

//   const uf = Object.create(null)
//   const count = Object.create(null)
//   for (const num of nums) {
//     uf[num] = num
//     count[num] = 1
//   }

//   let ans = 1
//   for (const num of nums) {
//     if (uf[num + 1] !== undefined) {
//       const u = find(num)
//       const v = find(num + 1)
//       ans = Math.max(ans, union(u, v))
//     }
//   }
//   return ans

//   function find(x) {
//     if (uf[x] !== x) {
//       uf[x] = find(uf[x])
//     }
//     return uf[x]
//   }

//   function union(u, v) {
//     if (u === v) return count[u]
//     count[u] += count[v]
//     uf[v] = u
//     return count[u]
//   }
// }

// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0
//   const hash = new Map()
//   let ans = 1
//   for (const num of nums) {
//     if (hash.has(num)) continue
//     const l = hash.get(num - 1) || 0
//     const r = hash.get(num + 1) || 0
//     const count = l + r + 1
//     hash.set(num, count)
//     hash.set(num - l, count)
//     hash.set(num + r, count)
//     ans = Math.max(ans, count)
//   }
//   return ans
// }

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0

  const numsSet = new Set(nums)
  let ans = 0
  for (const num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let curNum = num
      let curLen = 1
      while (numsSet.has(curNum + 1)) {
        curNum += 1
        curLen += 1
      }
      ans = Math.max(ans, curLen)
    }
  }
  return ans
}
