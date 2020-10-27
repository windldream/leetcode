/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  folder.sort()
  const ans = []
  let lib = '//'
  for (const f of folder) {
    if (!f.startsWith(lib)) {
      ans.push(f)
      lib = f + '/'
    }
  }
  return ans
}
