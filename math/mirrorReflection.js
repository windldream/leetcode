/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function (p, q) {
  let m = p,
    n = q
  let r
  while (n > 0) {
    r = m % n
    m = n
    n = r
  }
  if ((p / m) % 2 === 0) {
    return 2
  } else if ((q / m) % 2 === 0) {
    return 0
  } else {
    return 1
  }
}
