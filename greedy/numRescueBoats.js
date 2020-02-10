/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b);
  let l = 0,
    r = people.length - 1;
  let res = 0;

  while (l <= r) {
    res += 1;
    if (people[l] + people[r] <= limit) {
      l++;
    }
    r--;
  }

  return res;
};

console.log(numRescueBoats([3, 5, 3, 4], 5));
