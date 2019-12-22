/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  if (s === '') {
    return 0;
  }
  return s.split(/\s+/).pop().length;
};

console.log(lengthOfLastWord("b   a    "));