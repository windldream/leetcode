/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
  const n = security.length
  const robs = Array(n).fill(0)
  let cnt = 0

  for (let i = 0; i < n; i++) {
    if (i >= 1 && security[i - 1] >= security[i]) {
      cnt++
    } else {
      cnt = 0
    }

    if (cnt >= time) robs[i] += 1
  }

  for (let i = n - 1; i >= 0; i--) {
    if (i < n - 1 && security[i + 1] >= security[i]) {
      cnt++
    } else {
      cnt = 0
    }

    if (cnt >= time) robs[i] += 1
  }

  const days = []

  robs.forEach((val, idx) => {
    if (val === 2) days.push(idx)
  })

  return days
}
