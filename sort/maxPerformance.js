/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
  const M = 1000000007n;
  const infos = [];
  for (let i = 0; i < n; i++) {
    infos.push([speed[i], efficiency[i]]);
  }

  infos.sort((a, b) => b[1] - a[1]);

  const heap = [];
  let res = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (heap.length > k - 1) {
      sum -= heap.shift();
    }
    const temp = (BigInt(sum) + BigInt(infos[i][0])) * BigInt(infos[i][1]);
    res = temp > res ? temp : res;
    add(heap, infos[i][0]);
    sum += infos[i][0];
  }
  return res % M;

  function add(arr, num) {
    const index = arr.findIndex(val => val > num);

    if (index > -1) {
      arr.splice(index, 0, num);
    } else {
      arr.push(num);
    }
  }
};

console.log(maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 2));
