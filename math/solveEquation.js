/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  const lr = equation.split('=')
  let lhs = 0
  let rhs = 0
  for (const x of breakIt(lr[0])) {
    if (x.indexOf('x') >= 0) {
      lhs += parseInt(coeff(x))
    } else {
      rhs -= parseInt(x)
    }
  }
  for (const x of breakIt(lr[1])) {
    if (x.indexOf('x') >= 0) {
      lhs -= parseInt(coeff(x))
    } else {
      rhs += parseInt(x)
    }
  }

  if (lhs === 0) {
    if (rhs === 0) {
      return 'Infinite solutions'
    }
    return 'No solution'
  }
  return `x=${rhs / lhs}`

  function coeff(x) {
    if (x.length > 1 && /\d/.test(x[x.length - 2])) {
      return x.replace('x', '')
    }
    return x.replace('x', '1')
  }

  function breakIt(s) {
    const res = []
    let r = ''
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '+' || s[i] === '-') {
        if (r.length > 0) {
          res.push(r)
        }
        r = '' + s[i]
      } else {
        r += s[i]
      }
    }
    res.push(r)
    return res
  }
}

solveEquation('x+5-3+x=6+x-2')
