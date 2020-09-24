/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
  const res = []
  let a = 1
  let b = 1
  res.push(1)
  while (b < k) {
    const tmp = a
    a = b
    b = tmp + a
    res.push(b)
  }

  let ans = 0
  let index = 0
  res.reverse()
  while (k > 0) {
    while (k >= res[index]) {
      ans++
      k -= res[index]
    }
    index++
  }
  return ans
}

findMinFibonacciNumbers(19)
