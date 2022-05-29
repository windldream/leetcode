/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function (arr, m) {
  const n = arr.length
  const link = Array(n + 1).fill(-1)
  let ans = -1
  let cnt = 0

  for (let i = 0; i < n; i++) {
    const pos = arr[i] - 1
    link[pos] = pos

    let l = pos
    let r = pos

    // 融合左边线段
    if (pos > 0 && link[pos - 1] !== -1) {
      if (pos - 1 - link[pos - 1] + 1 === m) cnt--
      l = link[pos - 1]
    }

    // 融合右边线段
    if (pos + 1 < n && link[pos + 1] !== -1) {
      if (link[pos + 1] - (pos + 1) + 1 === m) cnt--
      r = link[pos + 1]
    }

    link[l] = r
    link[r] = l

    if (r - l + 1 === m) cnt++

    // 最终都会融合线段，只要存在cnt就代表曾经存在这么一条线段
    if (cnt > 0) ans = i + 1
  }

  return ans
}
