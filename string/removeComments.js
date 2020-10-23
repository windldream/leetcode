/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
  let total = ''
  for (const node of source) {
    total += node + '\n'
  }

  let len = total.length
  let i = 0
  while (i < len - 1) {
    const fi = total[i]
    const se = total[i + 1]
    if (fi === '/' && se === '/') {
      let index = i
      while (i < len && total[i] !== '\n') i++
      total = total.substring(0, index) + total.substring(i)
      len = total.length
      i = index - 1
    } else if (fi === '/' && se === '*') {
      let index = i
      i += 2
      while (i < len - 1 && !(total[i] == '*' && total[i + 1] === '/')) i++
      total = total.substring(0, index) + total.substring(i + 2)
      i = index - 1
    }
    i++
  }

  return total.split('\n').filter((val) => val)
}
