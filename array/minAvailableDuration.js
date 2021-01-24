/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
const minAvailableDuration = function (slots1, slots2, duration) {
  slots1.sort((a, b) => a[0] - b[0])
  slots2.sort((a, b) => a[0] - b[0])
  for (const [start1, end1] of slots1) {
    for (const [start2, end2] of slots2) {
      if (start1 > end2 || start2 > end1) continue
      if (end1 - start1 < duration || end2 - start2 < duration) continue
      if (start1 <= start2 && end1 - start2 >= duration) {
        return [start2, start2 + duration]
      }
      if (start2 <= start1 && end2 - start1 >= duration) {
        return [start1, start1 + duration]
      }
      if (start1 <= start2 && end1 >= end2 && end2 - start2 >= duration) {
        return [start2, start2 + duration]
      }
      if (start2 <= start1 && end2 >= end1 && end1 - start1 >= duration) {
        return [start1, start1 + duration]
      }
    }
  }
  return []
}
