/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function (cont) {
  const res = [1, 0]
  for (let i = cont.length - 1; i >= 0; i--) {
    const temp = res[1]
    res[1] = res[0]
    res[0] = cont[i] * res[1] + temp
  }
  return res
}

fraction([3, 2, 0, 2])
