/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  const len = intervals.length
  if (len === 0) return 0
  const start = []
  const end = []
  for (const [s, e] of intervals) {
    start.push(s)
    end.push(e)
  }
  start.sort((a, b) => a - b)
  end.sort((a, b) => a - b)
  let rooms = 0
  let activeMeeting = 0
  let i = 0
  let j = 0
  while (i < len && j < len) {
    if (start[i] < end[j]) {
      activeMeeting++
      i++
    } else {
      activeMeeting--
      j++
    }
    rooms = Math.max(rooms, activeMeeting)
  }
  return rooms
}

minMeetingRooms([
  [0, 30],
  [5, 10],
  [15, 20]
])
