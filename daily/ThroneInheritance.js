/**
 * @param {string} kingName
 */
var ThroneInheritance = function (kingName) {
  this.deathMap = new Set()
  this.inheritMap = new Map()
  this.kingName = kingName
}

/**
 * @param {string} parentName
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function (parentName, childName) {
  if (!this.inheritMap.has(parentName)) {
    this.inheritMap.set(parentName, new Set())
  }
  this.inheritMap.get(parentName).add(childName)
}

/**
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function (name) {
  this.deathMap.add(name)
}

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function () {
  const ans = []
  dfs(this.inheritMap, this.kingName, this.deathMap)
  function dfs(root, name, deathMap) {
    if (!deathMap.has(name)) {
      ans.push(name)
    }
    if (!root.has(name)) return
    for (const next of root.get(name)) {
      dfs(root, next, deathMap)
    }
  }
  return ans
}

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
