/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function (n, start) {
  const greyCode = []
  for (let i = 0; i < 1 << n; i++) {
    greyCode.push(i ^ (i >> 1))
  }

  const index = greyCode.indexOf(start)
  return greyCode.slice(index).concat(greyCode.slice(0, index))
}

circularPermutation(2, 3)
