/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  const len = data.length
  let i = 0
  while (i < len) {
    const bit = transform(data[i])
    if (bit.startsWith('0')) {
      i++
    } else if (bit.startsWith('110')) {
      if (i + 1 < len) {
        const next = transform(data[i + 1])
        if (next.startsWith('10')) {
          i += 2
        } else {
          return false
        }
      } else {
        return false
      }
    } else if (bit.startsWith('1110')) {
      if (i + 2 < len) {
        const next1 = transform(data[i + 1])
        const next2 = transform(data[i + 2])
        if (next1.startsWith('10') && next2.startsWith('10')) {
          i += 3
        } else {
          return false
        }
      } else {
        return false
      }
    } else if (bit.startsWith('11110')) {
      if (i + 3 < len) {
        const next1 = transform(data[i + 1])
        const next2 = transform(data[i + 2])
        const next3 = transform(data[i + 3])
        if (next1.startsWith('10') && next2.startsWith('10') && next3.startsWith('10')) {
          i += 4
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  }

  return true

  function transform(n) {
    let str = n.toString(2)
    if (str.length < 8) {
      str = '0'.repeat(8 - str.length) + str
    }
    return str
  }
}
