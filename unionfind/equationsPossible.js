/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  const unionfind = {};
  for (const [c1, c2, c3, c4] of equations) {
    if (c2 === "=") {
      union(c1, c4);
    }
  }

  for (const [c1, c2, c3, c4] of equations) {
    const x = find(c1);
    const y = find(c4);
    if (c2 === "!") {
      if (x === y) {
        return false;
      }
    }
  }
  return true;

  function find(i) {
    if (unionfind[i] === undefined) {
      return (unionfind[i] = i);
    }
    return unionfind[i] === i ? i : (unionfind[i] = find(unionfind[i]));
  }

  function union(x, y) {
    x = find(x);
    y = find(y);
    unionfind[y] = x;
  }
};
