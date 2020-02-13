/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  const len = s.length,
    stack = [];
  let num = 0;
  for (let i = 0; i < len; i++) {
    if (stack.length) {
      if (
        (s[i] === 'L' && stack[stack.length - 1] === 'R') ||
        (s[i] === 'R' && stack[stack.length - 1] === 'L')
      ) {
        stack.pop();
        if (stack.length === 0) {
          num++;
        }
      } else {
        stack.push(s[i]);
      }
    } else {
      stack.push(s[i]);
    }
  }
  return num;
};

console.log(balancedStringSplit('RLRRRLLRLL'));
