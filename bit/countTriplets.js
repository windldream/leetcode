/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  if (arr.length < 2) return 0
  const len = arr.length
  const s = Array(len + 1).fill(0)
  for (let i = 0; i < len; i++) {
    s[i + 1] = s[i] ^ arr[i]
  }

  let ans = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j; k < len; k++) {
        const g1 = s[i] ^ s[j]
        const g2 = s[j] ^ s[k + 1]
        if (g1 === g2) ans++
      }
    }
  }
  return ans
}

countTriplets([2, 3, 1, 6, 7])
