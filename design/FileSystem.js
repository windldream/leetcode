class Dir {
  constructor() {
    this.dirs = new Map()
    this.files = new Map()
  }
}

const FileSystem = function() {
  this.root = new Dir()
};

/**
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function(path) {
  let t = this.root
  const files = []
  if (path !== '/') {
    const d = path.split('/')
    const len = d.length
    for (let i = 1; i < len - 1; i++) {
      t = t.dirs.get(d[i])
    }
    if (t.files.has(d[len - 1])) {
      files.push(d[d.length - 1])
      return files
    }
    t = t.dirs.get(d[len - 1])
  }
  files.push(...t.dirs.keys())
  files.push(...t.files.keys())
  files.sort()
  return files
};

/**
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function(path) {
  let t = this.root
  const d = path.split('/')
  const len = d.length
  for (let i = 1; i < len; i++) {
    if (!t.dirs.has(d[i])) {
      t.dirs.set(d[i], new Dir())
    }
    t = t.dirs.get(d[i])
  }
};

/**
 * @param {string} filePath
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function(filePath, content) {
  let t = this.root
  const d = filePath.split('/')
  const len = d.length
  for (let i = 1; i < len - 1; i++) {
    t = t.dirs.get(d[i])
  }
  t.files.set(d[len - 1], (t.files.get(d[len - 1]) || '') + content)
};

/**
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function(filePath) {
  let t = this.root
  const d = filePath.split('/')
  const len = d.length
  for (let i = 1; i < len - 1; i++) {
    t = t.dirs.get(d[i])
  }
  return t.files.get(d[len - 1])
};

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */