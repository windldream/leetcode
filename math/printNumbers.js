/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  const numbers = []
  const max = 10 ** n
  for (let i = 1; i < max; i++) {
    numbers.push(i)
  }
  return numbers
}
