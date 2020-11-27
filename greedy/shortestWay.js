/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {
  const set = new Set()
  for (const c of source) {
    set.add(c)
  }
  for (const c of target) {
    if (!set.has(c)) return -1
  }

  let ans = 0
  let i = 0
  const m = target.length
  const n = source.length
  while (i < m) {
    if (i + n < target) {
      const len = getLen(source, target.substring(i, i + n))
      i += len
      ans++
    } else {
      const len = getLen(source, target.substring(i))
      i += len
      ans++
    }
  }
  return ans

  function getLen(a, b) {
    let ans = 0
    let i = 0
    let j = 0
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) {
        ans++
        j++
      }
      i++
    }
    return ans
  }
}

shortestWay('abc', 'acdbc')
