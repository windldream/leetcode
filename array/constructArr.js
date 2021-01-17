/**
 * @param {number[]} a
 * @return {number[]}
 */
const constructArr = function (a) {
  const len = a.length
  const ans = Array(len).fill(0)
  let sum = 1
  for (let i = 0; i < len; i++) {
    ans[i] = sum
    sum *= a[i]
  }

  sum = 1
  for (let i = len - 1; i >= 0; i--) {
    ans[i] *= sum
    sum *= a[i]
  }
  return ans
}

constructArr([1, 2, 3, 4, 5])
