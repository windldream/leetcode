/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, N) {
  let state = 0
  for (let i = 0; i < 8; i++) {
    if (cells[i] > 0) {
      state ^= 1 << i
    }
  }

  const seen = new Map()
  while (N > 0) {
    if (seen.has(state)) {
      N %= seen.get(state) - N
    }
    seen.set(state, N)

    if (N >= 1) {
      N--
      state = nextDay(state)
    }
  }

  const ans = Array(8).fill(0)
  for (let i = 0; i < 8; i++) {
    if (((state >> i) & 1) > 0) {
      ans[i] = 1
    }
  }
  return ans

  function nextDay(state) {
    let ans = 0
    for (let i = 1; i <= 6; i++) {
      if (((state >> (i - 1)) & 1) === ((state >> (i + 1)) & 1)) {
        ans ^= 1 << i
      }
    }
    return ans
  }
}
