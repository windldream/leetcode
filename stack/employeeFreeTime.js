/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function (schedule) {
  const open = 0
  const close = 1
  const events = []
  for (const emp of schedule) {
    for (const s of emp) {
      events.push([s.start, open])
      events.push([s.end, close])
    }
  }
  events.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })

  const ans = []
  let prev = -1
  let bal = 0
  for (const event of events) {
    if (bal === 0 && prev >= 0) {
      ans.push(new Interval(prev, event[0]))
    }
    bal += event[1] === open ? 1 : -1
    prev = event[0]
  }
  return ans
}
