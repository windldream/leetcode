/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function (arr) {
  const len = arr.length
  let max = ''
  for (let i = 0; i < len; i++) {
    if (arr[i] > 2) continue
    const s1 = arr[i] + ''
    for (let j = 0; j < len; j++) {
      if (i === j) continue
      if (s1 === '2' && arr[j] > 3) continue
      const s2 = s1 + arr[j]
      for (let k = 0; k < len; k++) {
        if (i === k || j === k) continue
        if (arr[k] > 5) continue
        const s3 = s2 + arr[k]
        const s = 6 - (i + j + k)
        const s4 = s3 + arr[s]
        if (max.length === 0 || +s4 > +max) {
          max = s4
        }
      }
    }
  }

  return max === '' ? max : max.substring(0, 2) + ':' + max.substring(2)
}

largestTimeFromDigits([1, 2, 3, 4])
