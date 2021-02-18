/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// var minKBitFlips = function (A, K) {
//   let l = 0
//   let r = K - 1
//   let count = 0
//   while (r < A.length) {
//     if (r - l + 1 === K) {
//       if (A[l] === 0) {
//         flip(A, l, r)
//         count++
//       }
//       l++
//     }
//     r++
//   }

//   for (let i = l; i < r; i++) {
//     if (A[i] === 0) return -1
//   }
//   return count

//   function flip(arr, l, r) {
//     for (let i = l; i <= r; i++) {
//       arr[i] = 1 - arr[i]
//     }
//   }
// }

var minKBitFlips = function (A, K) {
  const queue = []
  let ans = 0
  for (let i = 0; i < A.length; i++) {
    while (queue.length && queue[0] + K <= i) {
      queue.shift()
    }
    if (A[i] === queue.length % 2) {
      if (i + K > A.length) return -1
      queue.push(i)
      ans++
    }
  }
  return ans
}

minKBitFlips([0, 1, 0], 1)
