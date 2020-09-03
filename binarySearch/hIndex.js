/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const len = citations.length
  if (len === 0) return 0
  let lo = 0
  let hi = len - 1
  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (len - mid > citations[mid]) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return len - lo
}
