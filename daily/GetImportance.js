/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const map = new Map()
  for (const employee of employees) {
    const { id, importance, subordinates } = employee
    map.set(id, [importance, subordinates])
  }

  let ans = 0
  const queue = [id]
  while (queue.length) {
    const id = queue.shift()
    if (map.has(id)) {
      const [importance, subordinates] = map.get(id)
      ans += importance
      queue.push(...subordinates)
    }
  }
  return ans
}
