/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  const knowledgeMap = new Map()
  for (const [key, val] of knowledge) knowledgeMap.set(key, val)
  const reg = /\([a-z]+\)/g
  return s.replace(reg, (match) => {
    const key = match.substring(1, match.length - 1)
    return knowledgeMap.has(key) ? knowledgeMap.get(key) : '?'
  })
}
