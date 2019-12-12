/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let sum = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    while (i < timeSeries.length - 1 && timeSeries[i] + duration - 1 >= timeSeries[i + 1]) {
      sum += timeSeries[i + 1] - timeSeries[i];
      i++
    }
    sum += duration
  }
  return sum;
};

console.log(findPoisonedDuration([1, 2], 2))