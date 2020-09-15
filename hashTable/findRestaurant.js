/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map = new Map()
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i)
  }

  let minCount = Infinity
  let ans = []
  for (let i = 0; i < list2.length; i++) {
    const val = list2[i]
    if (!map.has(val)) continue
    map.set(val, map.get(val) + i)
    if (map.get(val) < minCount) {
      minCount = map.get(val)
    }
  }

  for (const [key, val] of map) {
    if (!list2.includes(key)) continue
    if (val === minCount) {
      ans.push(key)
    }
  }
  return ans
}

findRestaurant(
  ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
  ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']
)
