/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  stones.sort((a, b) => b - a);
  for (let i = 0; i < stones.length - 1; i++) {
    if (stones[i] === stones[i + 1]) {
      stones.splice(i, 2);
      i--;
      stones.sort((a, b) => b - a);
    } else {
      stones.splice(i, 2, stones[i] - stones[i + 1]);
      stones.sort((a, b) => b - a);
      i--;
    }
  }

  return stones.length > 0 ? stones[0] : 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
// [2,7,4,1,8,1]
// [8, 7, 4, 2, 1, 1]
// [1, 4, 2, 1, 1]
// [1, 2, 1, 1]
// [1, 1, 1]
// [1]
