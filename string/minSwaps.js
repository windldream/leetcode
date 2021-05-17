/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  const n = s.length
  let num0 = 0
  let num1 = 0
  let odd1 = 0
  let ans = n
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') {
      num1++
      if (i % 2 === 0) odd1++
    } else {
      num0++
    }
  }

  if (Math.abs(num0 - num1) > 1) return -1

  if (n % 2 === 0) {
    ans = Math.min(odd1, n / 2 - odd1)
  } else {
    if (num0 > num1) {
      ans = odd1
    } else {
      ans = num1 - odd1
    }
  }
  return ans
}

minSwaps('0110111010001100')
