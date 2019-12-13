/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0,
    i = 0,
    len = flowerbed.length;

  while (i < len) {
    if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === len - 1 || flowerbed[i + 1] === 0)) {
      flowerbed[i] = 1;
      count++;
    }
    i++;
  }

  return count >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2))