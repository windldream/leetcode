/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
  let evenSum = 0
  for (const num of A) {
    if (num % 2 === 0) {
      evenSum += num
    }
  }

  const ans = []
  for (let i = 0; i < A.length; i++) {
    const [val, index] = queries[i]
    const pre = A[index]
    A[index] += val
    if (pre % 2 === 0 && A[index] % 2 === 0) {
      ans[i] = evenSum = evenSum + val
    } else if (pre % 2 === 0) {
      ans[i] = evenSum = evenSum - pre
    } else if (A[index] % 2 === 0) {
      ans[i] = evenSum = evenSum + A[index]
    } else {
      ans[i] = evenSum
    }
  }
  return ans
}

sumEvenAfterQueries(
  [1, 2, 3, 4],
  [
    [1, 0],
    [-3, 1],
    [-4, 0],
    [2, 3]
  ]
)
