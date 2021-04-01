/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//   const n = height.length
//   if (n < 3) return 0

//   let ans = 0
//   const stack = []
//   for (let i = 0; i < n; i++) {
//     while (stack.length && height[stack[stack.length - 1]] <= height[i]) {
//       const index = stack.pop()
//       const prevH = height[index]
//       if (prevH === 0) continue
//       for (let j = index; j < i; j++) {
//         ans += prevH - height[j]
//         height[j] = prevH
//       }
//     }
//     stack.push(i)
//   }

//   if (stack.length >= 2) {
//     let start = stack[0]
//     for (let i = 1; i < stack.length; i++) {
//       for (let j = start + 1; j < stack[i]; j++) {
//         ans += height[stack[i]] - height[j]
//       }
//       start = stack[i]
//     }
//   }
//   return ans
// }

var trap = function (height) {
  const n = height.length
  if (n < 3) return 0

  let ans = 0
  let lmax = height[0]
  let rmax = height[n - 1]
  let l = 0
  let r = n - 1
  while (l < r) {
    if (lmax < rmax) {
      ans += lmax - height[l++]
      lmax = Math.max(lmax, height[l])
    } else {
      ans += rmax - height[r--]
      rmax = Math.max(rmax, height[r])
    }
  }
  return ans
}

trap([11, 2, 20, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
