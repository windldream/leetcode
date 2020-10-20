/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  s = s.trim()
  if (s.length === 0) return 0
  return s.split(/\s+/g).length
}

countSegments('Of all the gin joints in all the towns in all the world,   ')
