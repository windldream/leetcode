/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  const arr = Array(60).fill(0)
  const mod = 60
  for (const num of time) {
    arr[num % mod] += 1
  }

  let ans = 0
  for (let i = 0; i <= mod >> 1; i++) {
    if (i === 0 || i === 30) {
      ans += (arr[i] * (arr[i] - 1)) / 2
    } else {
      ans += arr[i] * arr[mod - i]
    }
  }
  return ans
}

numPairsDivisibleBy60([60, 60, 60])
