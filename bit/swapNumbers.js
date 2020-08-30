/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function (numbers) {
  return ([numbers[1], numbers[0]] = [numbers[0], numbers[1]])
}
