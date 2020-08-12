/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
  const res = []
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (count(h) + count(m) === num) {
        res.push(h + ':' + (m < 10 ? '0' + m : m))
      }
    }
  }
  return res

  function count(i) {
    let res = 0
    while (i !== 0) {
      i = i & (i - 1)
      res++
    }
    return res
  }
}
