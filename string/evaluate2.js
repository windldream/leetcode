/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  const knowledgeMap = new Map()
  for (const [key, val] of knowledge) knowledgeMap.set(key, val)
  const reg = /\(([a-z]+)\)/g
  return s.replace(reg, (match, p1) => (knowledgeMap.has(p1) ? knowledgeMap.get(p1) : '?'))
}
