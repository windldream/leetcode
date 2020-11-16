/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  const sign = []
  if (expression[0] !== '-') {
    sign.push('+')
  }
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '+' || expression[i] === '-') {
      sign.push(expression[i])
    }
  }

  let prevNum = 0,
    prevDen = 1,
    i = 0
  for (const sub of expression.split(/[+-]/)) {
    if (sub.length > 0) {
      const fraction = sub.split('/')
      const num = +fraction[0]
      const den = +fraction[1]
      let g = Math.abs(gcd(den, prevDen))
      if (sign[i++] === '+') {
        prevNum = (prevNum * den) / g + (num * prevDen) / g
      } else {
        prevNum = (prevNum * den) / g - (num * prevDen) / g
      }
      prevDen = (den * prevDen) / g
      g = Math.abs(gcd(prevDen, prevNum))
      prevNum /= g
      prevDen /= g
    }
  }
  return prevNum + '/' + prevDen

  function gcd(x, y) {
    if (x === 0) return y
    return gcd(y % x, x)
  }
}

fractionAddition('1/3-1/2')
