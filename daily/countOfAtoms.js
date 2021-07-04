/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  const map = new Map()
  let str = ''
  handlerStr(formula, 0, map)
  const keys = [...map.keys()]
  keys.sort().forEach((key) => {
    str += key
    if (map.get(key) > 1) {
      str += map.get(key)
    }
  })
  return str

  function handlerStr(formula, index, map) {
    const len = formula.length
    if (index >= len || formula[index] === ')') {
      return index + 1
    }

    while (index < len) {
      if (formula[index] === '(') {
        const tempMap = new Map()
        index = handlerStr(formula, index + 1, tempMap)
        let n = 0
        while (index < len && /\d/.test(formula[index])) {
          n = n * 10 + parseInt(formula[index++])
        }
        if (n > 0) {
          for (const item of tempMap) {
            tempMap.set(item[0], tempMap.get(item[0]) * n)
          }
        }
        for (const item of tempMap) {
          if (map.has(item[0])) {
            map.set(item[0], map.get(item[0]) + item[1])
          } else {
            map.set(item[0], item[1])
          }
        }
      } else if (formula[index] === ')') {
        return index + 1
      } else {
        let name = formula[index++]
        while (index < len && /[a-z]/.test(formula[index])) {
          name += formula[index++]
        }
        let n = 0
        while (index < len && /\d/.test(formula[index])) {
          n = n * 10 + parseInt(formula[index++])
        }
        if (n > 0) {
          if (map.has(name)) {
            map.set(name, map.get(name) + n)
          } else {
            map.set(name, n)
          }
        } else {
          if (map.has(name)) {
            map.set(name, map.get(name) + 1)
          } else {
            map.set(name, 1)
          }
        }
      }
    }

    return index
  }
}
