/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  const set = new Set()
  for (let i = 0; i < Infinity; i++) {
    if (x ** i > bound) break
    for (let j = 0; j < Infinity; j++) {
      const val = x ** i + y ** j
      if (val > bound) break
      set.add(val)
      if (y === 1) break
    }
    if (x === 1) break
  }

  return [...set]
}
