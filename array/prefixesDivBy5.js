/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
  const len = A.length
  const ans = []
  let num = 0
  for (const n of A) {
    num <<= 1
    num += n
    num %= 10
    ans.push(num % 5 === 0)
  }
  return ans
}

prefixesDivBy5([0, 1, 1, 1, 1, 1])
