/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation = function (s) {
  const len = s.length
  const ans = Array(len + 1)
    .fill(0)
    .map((val, index) => index + 1)
  let i = 0
  while (i < len) {
    let j = i
    while (i < len && s[i] === 'D') {
      i++
    }
    reverse(ans, j, i)
    i++
  }
  return ans

  function reverse(arr, l, r) {
    while (l < r) {
      const tmp = arr[l]
      arr[l] = arr[r]
      arr[r] = tmp
      l++
      r--
    }
  }
}

findPermutation('DI')

//  DD
