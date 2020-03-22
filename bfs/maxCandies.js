/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
  const queue = [];
  const boxKeys = [];
  const seen = new Set();
  queue.push(...initialBoxes);

  let res = 0;
  while (queue.length) {
    const box = queue.pop();
    if (status[box] || boxKeys.indexOf(box) > -1) {
      res += candies[box];
      queue.push(...containedBoxes[box]);
      boxKeys.push(...keys[box]);
    } else {
      if (!seen.has(box)) {
        queue.unshift(box);
        seen.add(box);
      }
    }
  }

  return res;
};

maxCandies(
  [1, 0, 1, 0],
  [7, 5, 4, 100],
  [[], [], [1], []],
  [[1, 2], [3], [], []],
  [0]
);
