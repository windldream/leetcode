/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  const len = num.length
  for (let j = 1; j < num.length; j++) {
    for (let k = j + 1; k < num.length; k++) {
      if (backtrack(num, 0, j, k)) return true
    }
  }
  return false

  function backtrack(s, i, j, k) {
    if ((s[i] === '0' && j - i > 1) || (s[j] === '0' && k - j > 1)) return false
    const a = s.substr(i, j - i)
    const b = s.substr(j, k - j)
    const sum = add(a, b)
    const len = sum.length
    if (k + len > s.length || sum !== s.substr(k, len)) return false
    if (k + len === s.length) return true
    return backtrack(s, j, k, k + len)
  }

  function add(a, b) {
    let n1 = a.length - 1
    let n2 = b.length - 1
    let carry = 0
    let str = ''
    while (n1 >= 0 || n2 >= 0 || carry > 0) {
      let t1 = n1 >= 0 ? a[n1--] - '0' : 0
      let t2 = n2 >= 0 ? b[n2--] - '0' : 0
      str += ((t1 + t2 + carry) % 10) + 0
      carry = t1 + t2 + carry >= 10 ? 1 : 0
    }
    return str.split('').reverse().join('')
  }
}
