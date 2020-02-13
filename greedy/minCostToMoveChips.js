/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {
  const even = chips.filter(chip => (chip & 1) === 0);
  const odd = chips.filter(chip => (chip & 1) !== 0);
  return Math.min(even.length, odd.length);
};
