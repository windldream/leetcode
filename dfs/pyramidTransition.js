/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
  return dfs(bottom, allowed, 0, []);

  function dfs(bottom, allowed, index, next) {
    if (bottom.length === 1) {
      return true;
    }
    if (index > bottom.length - 2) {
      bottom = next.join('');
      next.length = 0;
      return dfs(bottom, allowed, 0, next);
    }
    const str = bottom.substring(index, index + 2);
    for (let i = 0; i < allowed.length; i++) {
      if (allowed[i].startsWith(str)) {
        next.push(allowed[i][2]);
        if (dfs(bottom, allowed, index + 1, next)) {
          return true;
        }
        next.pop();
      }
    }
    return false;
  }
};
