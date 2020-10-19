/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1List = version1.split('.')
  const v2List = version2.split('.')
  const m = v1List.length
  const n = v2List.length
  let i = 0
  while (i < Math.min(m, n)) {
    const a = v1List[i]
    const b = v2List[i]
    if (+a > +b) return 1
    if (+a < +b) return -1
    i++
  }

  let s = i
  while (s < m) {
    if (+v1List[s++] > 0) return 1
  }

  let k = i
  while (k < n) {
    if (+v2List[k++] > 0) return -1
  }

  return 0
}
