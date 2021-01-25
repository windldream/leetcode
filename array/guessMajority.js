/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares 4 different elements in the array
 *     // return 4 if the values of the 4 elements are the same (0 or 1).
 *     // return 2 if three elements have a value equal to 0 and one element has value equal to 1 or vice versa.
 *     // return 0 : if two element have a value equal to 0 and two elements have a value equal to 1.
 *     @param {number} a, b, c, d
 *     @return {number}
 *     this.query = function(a, b, c, d) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @return {number}
 */
var guessMajority = function (reader) {
  const len = reader.length()
  const nums = Array(len).fill(0)
  nums[0] = 1

  const q0123 = reader.query(0, 1, 2, 3)
  const q0124 = reader.query(0, 1, 2, 4)
  const q0134 = reader.query(0, 1, 3, 4)
  const q0234 = reader.query(0, 2, 3, 4)
  const q1234 = reader.query(1, 2, 3, 4)
  nums[1] = q0234 === q1234 ? 1 : 0
  nums[2] = q0134 === q1234 ? 1 : 0
  nums[3] = q0124 === q1234 ? 1 : 0
  nums[4] = q0123 === q1234 ? 1 : 0

  let prev = q1234
  for (let i = 5; i < len; i++) {
    const curr = reader.query(i - 3, i - 2, i - 1, i)
    nums[i] = prev === curr ? nums[i - 4] : 1 - nums[i - 4]
    prev = curr
  }

  const sum = nums.reduce((prev, curr) => prev + curr, 0)
  if (sum * 2 === len) return -1
  return sum * 2 < len ? find(0) : find(1)

  function find(num) {
    return nums.indexOf(num)
  }
}
