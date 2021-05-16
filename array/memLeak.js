/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function (memory1, memory2) {
  let i = 1
  while (true) {
    if (i > memory1 && i > memory2) break
    if (memory1 >= memory2) {
      memory1 -= i
    } else {
      memory2 -= i
    }
    i++
  }
  return [i, memory1, memory2]
}
