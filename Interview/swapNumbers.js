/**
 * @param {number[]} numbers
 * @return {number[]}
 */
// var swapNumbers = function (numbers) {
//   ;[numbers[0], numbers[1]] = [numbers[1], numbers[0]]
//   return numbers
// }

var swapNumbers = function (numbers) {
  numbers[1] = numbers[0] ^ numbers[1]
  numbers[0] = numbers[0] ^ numbers[1]
  numbers[1] = numbers[0] ^ numbers[1]
  return numbers
}

// a = a ^ b
// b = a
