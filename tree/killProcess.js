/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function (pid, ppid, kill) {
  if (kill === 0) return pid
  const g = new Map()
  const len = pid.length
  for (let i = 0; i < len; i++) {
    if (!g.has(ppid[i])) {
      g.set(ppid[i], [])
    }
    g.get(ppid[i]).push(pid[i])
  }

  if (!g.get(kill)) return [kill]

  const ans = new Set()
  ans.add(kill)
  getProcess(g, kill, ans)
  return [...ans]

  function getProcess(g, pid, set) {
    if (!g.get(pid)) return
    for (const next of g.get(pid)) {
      set.add(next)
      getProcess(g, next, set)
    }
  }
}

killProcess([1, 3, 10, 5], [3, 0, 5, 3], 5)
