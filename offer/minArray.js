/**
 * @param {number[]} numbers
 * @return {number}
 */
// var minArray = function (numbers) {
//   const n = numbers.length
//   let min = numbers[0]
//   for (let i = 0; i < n; i++) {
//     if (numbers[i] < min) {
//       return numbers[i]
//     }
//   }
//   return min
// }

var minArray = function (numbers) {
  const n = numbers.length
  if (n === 1) return numbers[0]
  let l = 0
  let r = n - 1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (numbers[mid] < numbers[r]) {
      r = mid
    } else if (numbers[mid] > numbers[r]) {
      l = mid + 1
    } else {
      r -= 1
    }
  }
  return numbers[l]
}

minArray([10, 1, 10, 10, 10])

// [10, 1, 10, 10, 10]
// [1, 10, 10, 10, 10]
