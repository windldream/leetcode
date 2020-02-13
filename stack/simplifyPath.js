/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = [];
  path = path.split('/');

  for (let p of path) {
    if (p === '..') {
      if (stack.length) {
        stack.pop();
      }
    } else if (p && p !== '.') {
      stack.push(p);
    }
  }

  return '/' + stack.join('/');
};

console.log(simplifyPath('/a//b////c/d//././/..'));
