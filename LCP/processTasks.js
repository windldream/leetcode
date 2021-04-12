/**
 * @param {number[][]} tasks
 * @return {number}
 */
var processTasks = function (tasks) {
  const segs = []
  const pre = []
  pre.push(0)
  tasks.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : b[2] - a[2]))
  for (const [start, end, period] of tasks) {
    const need = period - query(start)
    // 还需多少开机时间
    if (need > 0) push(need, end)
  }
  return pre[pre.length - 1]

  function query(l) {
    const start = searchStart(l)
    const res = pre[pre.length - 1] - pre[start]
    // l - segs[start][0] 共用多少起始时间
    if (res !== 0 && l > segs[start][0]) {
      return res - (l - segs[start][0])
    }
    return res
  }

  function searchStart(target) {
    let l = 0
    let r = segs.length - 1
    let res = segs.length
    while (l <= r) {
      const mid = (l + r) >> 1
      if (segs[mid][1] >= target) {
        res = mid
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
    return res
  }

  function push(need, r) {
    while (true) {
      if (segs.length === 0 || r - segs[segs.length - 1][1] > need) {
        pre.push(pre[pre.length - 1] + need)
        // 最晚要在r - need + 1刻开机
        segs.push([r - need + 1, r])
        break
      } else {
        need += segs[segs.length - 1][1] - segs[segs.length - 1][0] + 1
        segs.pop()
        pre.pop()
      }
    }
  }
}
