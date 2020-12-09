/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function (regions, region1, region2) {
  const map = new Map()
  for (const list of regions) {
    const len = list.length
    const u = list[0]
    for (let i = 1; i < len; i++) {
      map.set(list[i], u)
    }
  }

  const set = new Set()
  while (region1) {
    set.add(region1)
    region1 = map.get(region1)
  }

  while (region2) {
    if (set.has(region2)) return region2
    region2 = map.get(region2)
  }
}
