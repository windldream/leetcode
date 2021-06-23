/**
 * @param {string} expression
 * @return {number}
 */
var minOperationsToFlip = function (expression) {
  const states = []
  const ops = []
  for (const c of expression) {
    if (c === '0' || c === '1' || c === ')') {
      if (c === '0') {
        states.push([0, 1])
      } else if (c === '1') {
        states.push([1, 0])
      } else {
        ops.pop()
      }
      if (ops.length > 0 && ops[ops.length - 1] !== '(') {
        const op = ops.pop()
        const [p2, q2] = states.pop()
        const [p1, q1] = states.pop()
        if (op === '&') {
          states.push([Math.min(p1, p2), Math.min(q1 + q2, 1 + Math.min(q1, q2))])
        } else {
          states.push([Math.min(p1 + p2, Math.min(p1, p2) + 1), Math.min(q1, q2)])
        }
      }
    } else {
      ops.push(c)
    }
  }

  return Math.max(...states[states.length - 1])
}
