/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  return A.sort((a, b) => {
    if (a % 2 === 0) return -1
    if (b % 2 === 0) return 1
    return 0
  })
}

sortArrayByParity([0, 1])
