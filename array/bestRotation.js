/**
 * @param {number[]} A
 * @return {number}
 */
var bestRotation = function (A) {
  const len = A.length
  const bad = Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    const left = (i - A[i] + 1 + len) % len
    const right = (i + 1) % len
    bad[left]--
    bad[right]++
    if (left > right) {
      bad[0]--
    }
  }

  let best = -len
  let ans = 0,
    cur = 0
  for (let i = 0; i < len; i++) {
    cur += bad[i]
    if (cur > best) {
      best = cur
      ans = i
    }
  }
  return ans
}
