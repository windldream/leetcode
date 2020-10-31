/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  s = s.replace(/[^\(\)]/g, '')
  let max = 0
  const stack = []
  for (const c of s) {
    if (c === '(') {
      stack.push(c)
    } else {
      max = Math.max(max, stack.length)
      stack.pop()
    }
  }
  return max
}

maxDepth('(1+(2*3)+((8)/4))+1')
