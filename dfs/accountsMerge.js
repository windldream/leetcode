/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const emailToName = {};
  const graph = {};
  buildGraph(graph, emailToName, accounts);

  const res = [];
  const visited = new Set();

  for (const mail in emailToName) {
    if (!visited.has(mail)) {
      const list = [];
      list.push(mail);
      visited.add(mail);
      dfs(graph, list, mail, visited);
      list.sort();
      list.unshift(emailToName[mail]);
      res.push(list);
    }
  }

  return res;

  function buildGraph(graph, emailToName, accounts) {
    for (const acc of accounts) {
      const name = acc[0];
      for (let i = 1; i < acc.length; i++) {
        const mail = acc[i];
        emailToName[mail] = name;
        if (!graph[mail]) {
          graph[mail] = new Set();
        }
        if (i === 1) {
          continue;
        }
        const prev = acc[i - 1];
        graph[prev].add(mail);
        graph[mail].add(prev);
      }
    }
  }

  function dfs(graph, list, mail, visited) {
    if (!graph[mail] || graph[mail].size === 0) {
      return;
    }
    for (const next of graph[mail]) {
      if (!visited.has(next)) {
        list.push(next);
        visited.add(next);
        dfs(graph, list, next, visited);
      }
    }
  }
};
