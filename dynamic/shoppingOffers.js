/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
  const len = price.length;
  // 过滤不比原价便宜的礼包
  special = special.filter(item => {
    let sum = 0;
    for (let i = 0; i < item.length - 1; i++) {
      sum += item[i] * price[i];
    }
    return item[item.length - 1] < sum;
  });
  return shopping(special, needs);

  function shopping(special, needs) {
    const sum = needs.reduce((prev, curr) => prev + curr, 0);
    if (sum === 0) {
      return 0;
    }
    // 过滤物品超出 needs 所需要的礼包
    special = special.filter(item => {
      for (let i = 0; i < item.length; i++) {
        if (item[i] > needs[i]) {
          return false;
        }
      }
      return true;
    });

    if (special.length === 0) {
      return needs.reduce((prev, curr, index) => prev + curr * price[index], 0);
    }

    const res = [];
    for (let i = 0; i < special.length; i++) {
      const item = special[i];
      res.push(
        item[item.length - 1] +
          shopping(
            special,
            needs.map((need, index) => need - item[index])
          )
      );
    }
    return Math.min.apply(null, res);
  }
};

console.log(
  shoppingOffers(
    [2, 5],
    [
      [3, 0, 5],
      [1, 2, 10]
    ],
    [3, 2]
  )
);
