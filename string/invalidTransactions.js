/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
  const len = transactions.length
  const ans = []
  outer: for (let i = 0; i < len; i++) {
    const [name, time, amount, city] = transactions[i].split(',')
    if (amount > 1000) {
      ans.push(transactions[i])
      continue
    }
    for (let j = 0; j < len; j++) {
      if (i === j) continue
      const [name1, time1, amount1, city1] = transactions[j].split(',')
      if (city1 === city) continue
      if (name === name1 && Math.abs(time1 - time) <= 60) {
        ans.push(transactions[i])
        continue outer
      }
    }
  }
  return ans
}
