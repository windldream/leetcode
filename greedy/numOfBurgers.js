/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
  if (tomatoSlices === 0 || cheeseSlices === 0) {
    return [0, 0];
  }

  const jumbo = (tomatoSlices - 2 * cheeseSlices) / 2;
  const small = (4 * cheeseSlices - tomatoSlices) / 2;
  if (
    Number.isInteger(jumbo) &&
    jumbo >= 0 &&
    Number.isInteger(small) &&
    small >= 0
  ) {
    return [jumbo, small];
  } else {
    return [];
  }
};

console.log(numOfBurgers(2, 1));
// x 表示 big
// y 表示 small
// 4x + 2y === tomato
// 4x + 4y === 4cheese
