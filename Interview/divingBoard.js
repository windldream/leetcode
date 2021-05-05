/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
// var divingBoard = function (shorter, longer, k) {
//   if (k === 0) return []
//   const ans = []
//   for (let i = k; i >= 0; i--) {
//     const len = shorter * i + longer * (k - i)
//     if (!ans.includes(len)) ans.push(len)
//   }
//   return ans
// }

var divingBoard = function (shorter, longer, k) {
  if (k === 0) return []
  const ans = new Set()
  for (let i = k; i >= 0; i--) {
    ans.add(shorter * i + longer * (k - i))
  }
  return [...ans]
}

// shorter longer 3
//  3 0
//  2 1
//  1 2
//  0 3
