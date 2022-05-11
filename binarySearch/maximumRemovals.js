/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function (s, p, removable) {
  let lo = 0
  let hi = removable.length
  let ans = 0

  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    const str = remove(s, removable, mid)

    if (isSubSeq(str, p)) {
      ans = mid
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }

  return ans

  function remove(s, removable, k) {
    const removeList = new Set(removable.slice(0, k))
    let str = ''

    for (let i = 0; i < s.length; i++) {
      if (!removeList.has(i)) str += s[i]
    }

    return str
  }

  function isSubSeq(s, p) {
    let i = 0
    let j = 0

    while (i < s.length && j < p.length) {
      if (s[i] === p[j]) {
        i++
        j++
      } else {
        i++
      }
    }

    return j === p.length
  }
}
