/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  const angel = Math.abs(minutes * 6 - ((hour % 12) * 30 + minutes / 2))
  return Math.min(angel, 360 - angel)
}
