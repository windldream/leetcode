/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s) {
  let lo = 0
  let hi = words.length - 1
  while (lo <= hi) {
    let mid = lo + ((hi - lo) >> 1)
    if (words[mid] === '') {
      let l = mid - 1
      let r = mid + 1
      while (true) {
        if (l < lo && r > hi) {
          return -1
        } else if (r <= hi && words[r] !== '') {
          mid = r
          break
        } else if (l >= lo && words[l] !== '') {
          mid = l
          break
        }
        r++
        l--
      }
    }
    if (words[mid] === s) return mid
    else if (words[mid] < s) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return -1
}
