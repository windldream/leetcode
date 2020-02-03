/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
  const len = text.length;
  if (len === 0) {
    return 0;
  }

  for (let i = 1; i <= len / 2; i++) {
    if (text.substring(0, i) === text.substring(len - i)) {
      return 2 + longestDecomposition(text.substring(i, len - i));
    }
  }

  return 1;
};
