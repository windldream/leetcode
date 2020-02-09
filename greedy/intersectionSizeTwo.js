/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
  intervals.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });

  const list = [-1, -1];
  for (x of intervals) {
    // 有两个以上交集
    if (x[0] <= list[list.length - 2]) {
      continue;
    }
    // 无交集
    if (x[0] > list[list.length - 1]) {
      list.push(x[1] - 1);
    }
    // 有一个交集
    list.push(x[1]);
  }

  return list.length - 2;
};

console.log(
  intersectionSizeTwo([
    [1, 3],
    [1, 4],
    [2, 5],
    [3, 5]
  ])
);
