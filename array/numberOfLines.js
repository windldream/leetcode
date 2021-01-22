/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  const len = s.length
  let count = 1
  let width = 0
  for (let i = 0; i < len; i++) {
    const index = s[i].charCodeAt() - 'a'.charCodeAt()
    width += widths[index]
    if (width === 100 && i !== len - 1) {
      width -= 100
      count += 1
    } else if (width > 100) {
      width = widths[index]
      count += 1
    }
  }
  return [count, width]
}

numberOfLines(
  [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  'bbbcccdddaaa'
)
