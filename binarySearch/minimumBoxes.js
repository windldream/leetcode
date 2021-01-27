/**
 * @param {number} n
 * @return {number}
 */
var minimumBoxes = function (n) {
  if (n <= 3) return n
  let all = 0,
    pre = 0,
    pred = 0,
    ans = 0,
    layer = 0
  while (all < n) {
    pred++
    ans = pre + pred
    all += ans
    pre = ans
    layer++
  }

  while (all - layer >= n) {
    all -= layer
    layer--
    ans--
  }
  return ans
}

minimumBoxes(10)
