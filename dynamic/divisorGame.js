/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
  return helper(N);

  function helper(num) {
    if (num === 1) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    let next = helper(num - 1);
    if (!next) {
      return true;
    }
    return false;
  }
};

console.log(divisorGame(2));
