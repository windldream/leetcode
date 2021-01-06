/**
 * @param {string} time
 * @return {string}
 */
const nextClosestTime = function(time) {
  const [hour, minute] = time.split(':')
  const nums = new Set()
  for (const num of time) {
    if (num === ':') continue
    nums.add(num)
  }

  const timestmap = hour * 60 + +minute
  const max = 23 * 60 + 59
  for (let t = timestmap + 1; t <= max; t++) {
    const ans = convert(t, nums)
    if (ans) return ans
  }
  for (let t = 0; t < timestmap; t++) {
    const ans = convert(t, nums)
    if (ans) return ans
  }
  return time

  function convert(time, nums) {
    const m = time % 60
    const h = Math.trunc(time / 60)
    if ((h < 10 || m < 10) && !nums.has('0')) return false
    for (const c of (m + '' + h)) {
      if (!nums.has(c)) return false
    }
    return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m)
  }
};