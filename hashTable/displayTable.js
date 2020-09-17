/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  const map = new Map()
  for (const [customer, table, food] of orders) {
    if (!map.has(table)) {
      map.set(table, new Map())
    }
    const foodMap = map.get(table)
    if (!foodMap.has(food)) {
      foodMap.set(food, 0)
    }
    foodMap.set(food, foodMap.get(food) + 1)
  }

  const foods = new Set()
  const tables = []
  for (const [table, foodMap] of map) {
    tables.push(table)
    for (const food of foodMap.keys()) {
      foods.add(food)
    }
  }

  const cols = ['Table', ...[...foods].sort()]
  const rows = [...tables].sort((a, b) => +a - +b)
  const ans = Array(rows.length + 1)
    .fill(0)
    .map(() => Array(cols.length).fill(0))
  for (let col = 0; col < cols.length; col++) {
    ans[0][col] = cols[col]
  }
  for (let row = 1; row <= rows.length; row++) {
    ans[row][0] = rows[row - 1]
  }

  for (let col = 1; col < cols.length; col++) {
    for (let row = 1; row <= rows.length; row++) {
      const table = rows[row - 1]
      const food = cols[col]
      ans[row][col] = (map.get(table).get(food) || 0) + ''
    }
  }
  return ans
}

displayTable([
  ['David', '3', 'Ceviche'],
  ['Corina', '10', 'Beef Burrito'],
  ['David', '3', 'Fried Chicken'],
  ['Carla', '5', 'Water'],
  ['Carla', '5', 'Ceviche'],
  ['Rous', '3', 'Ceviche']
])
