/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
  const len = croakOfFrogs.length
  let c = 0,
    r = 0,
    o = 0,
    a = 0,
    k = 0
  for (let i = 0; i < len; i++) {
    if (croakOfFrogs[i] === 'c') {
      if (k > 0) {
        k--
      }
      c++
    } else if (croakOfFrogs[i] === 'r') {
      r++
      c--
    } else if (croakOfFrogs[i] === 'o') {
      o++
      r--
    } else if (croakOfFrogs[i] === 'a') {
      a++
      o--
    } else if (croakOfFrogs[i] === 'k') {
      k++
      a--
    }
    if (c < 0 || r < 0 || o < 0 || a < 0) break
  }
  if (c !== 0 || r !== 0 || o !== 0 || a !== 0) return -1
  return k
}

minNumberOfFrogs('croakroak')
