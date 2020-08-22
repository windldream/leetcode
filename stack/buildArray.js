/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const res = []

  let i = 1
  while (i <= n && target.length) {
    if (i === target[0]) {
      res.push('Push')
      target.shift()
    } else {
      while (i !== target[0]) {
        res.push('Push')
        res.push('Pop')
        i++
      }
      res.push('Push')
      target.shift()
    }
    i++
  }

  return res
}
