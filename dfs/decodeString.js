/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const len = s.length;
  if (len === '') {
    return s;
  }

  const stack = [];
  for (const c of s) {
    if (c === ']') {
      let str = '';
      while (stack.length) {
        const pop = stack.pop();
        if (pop === '[') {
          break;
        }
        str = pop + str;
      }

      let repeatNum = '';
      while (stack.length) {
        if (!/\d/.test(stack[stack.length - 1])) {
          break;
        }
        repeatNum = stack.pop() + repeatNum;
      }
      stack.push(str.repeat(+repeatNum));
    } else {
      stack.push(c);
    }
  }

  return stack.join('');
};
