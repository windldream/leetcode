/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
var minHeightShelves = function(books, shelf_width) {
  const len = books.length,
    dp = Array(len + 1).fill(Infinity);

  dp[0] = 0;
  for (let i = 1; i <= len; i++) {
    let cur_height = 0;
    let cur_width = 0;
    for (let j = i; j > 0; j--) {
      cur_height = Math.max(cur_height, books[j - 1][1]);
      cur_width += books[j - 1][0];
      if (cur_width > shelf_width) {
        break;
      }
      dp[i] = Math.min(dp[i], dp[j - 1] + cur_height);
    }
  }

  return dp[len];
};

console.log(
  minHeightShelves(
    [
      [1, 1],
      [2, 3],
      [2, 3],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 2]
    ],
    4
  )
);
