/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function (n, discount, products, prices) {
  this.index = 0
  this.interval = n
  this.discount = discount
  const map = new Map()
  for (let i = 0; i < products.length; i++) {
    map.set(products[i], prices[i])
  }
  this.map = map
}

/**
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function (product, amount) {
  this.index += 1
  let ans = 0
  for (let i = 0; i < product.length; i++) {
    ans += this.map.get(product[i]) * amount[i]
  }
  if (this.index % this.interval === 0) {
    ans -= (this.discount * ans) / 100
  }
  return ans
}

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */
