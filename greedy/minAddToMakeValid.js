/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  const len = S.length,
    stack = [];
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (S[i] === '(') {
      stack.push('(');
    } else {
      if (stack.length) {
        stack.pop();
        count += 2;
      }
    }
  }

  return len - count;
};

console.log(minAddToMakeValid('())'));
