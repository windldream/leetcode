/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
  d.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length;
    } else {
      return a > b ? 1 : a === b ? 0 : -1;
    }
  });

  for (let i = 0; i < d.length; i++) {
    if (contains(s, d[i])) {
      return d[i];
    }
  }
  return '';

  function contains(s, d) {
    let start = 0;
    for (let i = 0; i < d.length; i++) {
      let index = s.indexOf(d[i], start);
      if (index === -1) {
        return false;
      } else {
        start = index + 1;
      }
    }
    return true;
  }
};

console.log(findLongestWord('abpcplea', ['ale', 'apple', 'monkey', 'plea']));
