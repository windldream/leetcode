/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(
  restaurants,
  veganFriendly,
  maxPrice,
  maxDistance
) {
  const res = restaurants.filter(item => {
    return (
      (veganFriendly ? item[2] : true) &&
      item[3] <= maxPrice &&
      item[4] <= maxDistance
    );
  });
  res.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return b[1] - a[1];
  });

  return res.map(item => item[0]);
};
