/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
  const m = arr1.length;
  arr2 = [...new Set(arr2)].sort((a, b) => a - b);
  const n = arr2.length;

  const keep = Array(m).fill(Infinity);
  keep[0] = 0;

  const swap = Array(m)
    .fill(0)
    .map(() => Array(n).fill(Infinity));
  for (let i = 0; i < n; i++) {
    swap[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    let min_keep = Infinity;
    let min_swap = Infinity;
    for (let j = 0; j < n; j++) {
      // 交换 arr1[i] 和 arr2[j]
      // 使得 arr[0] 到 arr[j - 1] 满足递增
      if (j > 0) {
        min_swap = Math.min(min_swap, swap[i - 1][j - 1] + 1);
      }
      // 不交换 arr1[i] 和 arr2[j]
      // 使得 arr[0] 到 arr[j] 满足递增
      if (arr1[i] > arr2[j]) {
        min_keep = Math.min(min_keep, swap[i - 1][j]);
      }
      if (arr1[i] > arr1[i - 1]) {
        keep[i] = keep[i - 1];
      }
      if (arr2[j] > arr1[i - 1]) {
        swap[i][j] = keep[i - 1] + 1;
      }
      swap[i][j] = Math.min(min_swap, swap[i][j]);
      keep[i] = Math.min(min_keep, keep[i]);
    }
  }

  let ans = Math.min.apply(null, [keep[m - 1], ...swap[m - 1]]);
  return ans === Infinity ? -1 : ans;
};

console.log(makeArrayIncreasing([1, 5, 3, 6, 7], [4, 3, 1]));
