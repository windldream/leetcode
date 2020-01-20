/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
  if (startFuel >= target) {
    return 0;
  }
  const len = stations.length;
  if (len === 0 && target > startFuel) {
    return -1;
  }

  let sum = startFuel,
    heap = [],
    count = 0;
  for (let i = 0; i < len; i++) {
    heap = heap.sort((a, b) => b[1] - a[1]);
    while (sum < stations[i][0]) {
      if (heap.length === 0) {
        return -1;
      }
      sum += heap.shift()[1];
      count++;
    }
    heap.push(stations[i]);
  }

  heap = heap.sort((a, b) => b[1] - a[1]);
  while (sum < target) {
    if (heap.length === 0) {
      return -1;
    }
    sum += heap.shift()[1];
    count++;
  }

  return count;
};

console.log(
  minRefuelStops(100, 10, [
    [10, 60],
    [20, 30],
    [30, 30],
    [60, 40]
  ])
);
