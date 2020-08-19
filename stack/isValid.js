/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function (code) {
  const stack = []
  let containsTag = false

  if (code[0] !== '<' || code[code.length - 1] !== '>') return false

  for (let i = 0; i < code.length; i++) {
    let ending = false
    let closeIndex
    if (stack.length === 0 && containsTag) return false
    if (code[i] === '<') {
      if (stack.length && code[i + 1] == '!') {
        closeIndex = code.indexOf(']]>', i + 1)
        if (closeIndex === -1 || !isValidCdata(code.substring(i + 2, closeIndex))) return false
      } else {
        if (code[i + 1] === '/') {
          i++
          ending = true
        }
        closeIndex = code.indexOf('>', i + 1)
        if (closeIndex === -1 || !isValidTagName(code.substring(i + 1, closeIndex), ending)) return false
      }
      i = closeIndex
    }
  }

  return stack.length === 0 && containsTag

  function isValidTagName(s, ending) {
    if (s.length < 1 || s.length > 9) return false

    for (let i = 0; i < s.length; i++) {
      if (!/[A-Z]/.test(s[i])) return false
    }
    if (ending) {
      if (stack.length && stack[stack.length - 1] === s) {
        stack.pop()
      } else {
        return false
      }
    } else {
      containsTag = true
      stack.push(s)
    }
    return true
  }

  function isValidCdata(s) {
    return s.startsWith('[CDATA[')
  }
}
