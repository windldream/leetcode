/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  trips.sort((a, b) => a[1] - b[1]);
  const len = trips.length,
    endHash = {};
  for (let i = 0; i < len; i++) {
    for (let key in endHash) {
      if (trips[i][1] >= key) {
        capacity += endHash[key][0];
        delete endHash[key];
      }
    }
    if (capacity >= trips[i][0]) {
      capacity -= trips[i][0];
      if (endHash[trips[i][2]]) {
        endHash[trips[i][2]][0] += trips[i][0];
      } else {
        endHash[trips[i][2]] = trips[i];
      }
    } else {
      return false;
    }
  }

  return true;
};

console.log(
  carPooling(
    [
      [10, 5, 7],
      [10, 3, 4],
      [7, 1, 8],
      [6, 3, 4]
    ],
    24
  )
);
