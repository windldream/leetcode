/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const len = ratings.length,
    left = Array(len).fill(1),
    right = Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1;
    }
  }

  let count = left[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      right[i] = right[i + 1] + 1;
    }
    count += Math.max(right[i], left[i]);
  }
  return count;
};
