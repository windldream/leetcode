class Path {
  constructor(val) {
    this.val = val
    this.dirs = new Map()
  }
}
const FileSystem = function() {
  this.root = new Path()
};

/**
 * @param {string} path
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function(path, value) {
  const d = path.split('/')
  const len = d.length
  let map = this.root
  for (let i = 1; i < len - 1; i++) {
    if (!map.dirs.has(d[i])) {
      return false
    }
    map = map.dirs.get(d[i])
  }

  if (map.dirs.has(d[len - 1])) return false
  map.dirs.set(d[len - 1], new Path(value))
  return true
};

/**
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
  const d = path.split('/')
  const len = d.length
  let map = this.root
  for (let i = 1; i < len - 1; i++) {
    if (!map.dirs.has(d[i])) return -1
    map = map.dirs.get(d[i])
  }

  if (!map.dirs.has(d[len - 1])) return -1
  return map.dirs.get(d[len - 1]).val
};

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */