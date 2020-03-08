/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {
  let maxGroup = m;
  for (let i = 0; i < group.length; i++) {
    if (group[i] === -1) {
      group[i] = maxGroup++;
    }
  }

  const groupItem = Array(maxGroup)
    .fill(0)
    .map(() => new Set());
  for (let i = 0; i < group.length; i++) {
    groupItem[group[i]].add(i);
  }

  const groupIndegree = Array(maxGroup).fill(0);
  const groupGraph = Array(maxGroup)
    .fill(0)
    .map(() => new Set());
  const itemIndegree = Array(n).fill(0);
  const itemGraph = Array(n)
    .fill(0)
    .map(() => new Set());
  for (let i = 0; i < beforeItems.length; i++) {
    for (const dep of beforeItems[i]) {
      // 属于同一小组
      if (group[i] === group[dep]) {
        itemIndegree[i]++;
        itemGraph[dep].add(i);
      } else {
        if (!groupGraph[group[dep]].has(group[i])) {
          // 整个小组的入度数
          groupIndegree[group[i]]++;
          groupGraph[group[dep]].add(group[i]);
        }
      }
    }
  }

  // 添加整个小组入度为 0 的小组
  const queue = [];
  for (let i = 0; i < maxGroup; i++) {
    if (groupIndegree[i] === 0) {
      queue.push(i);
    }
  }

  const ans = [];
  while (queue.length) {
    const curr = queue.shift();
    ans.push(curr);

    for (const next of groupGraph[curr]) {
      groupIndegree[next] -= 1;
      if (groupIndegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  if (ans.length !== maxGroup) {
    return [];
  }

  const res = [];
  for (let i = 0; i < ans.length; i++) {
    for (const next of groupItem[ans[i]]) {
      if (itemIndegree[next] === 0) {
        queue.push(next);
      }
    }

    let count = 0;
    while (queue.length) {
      const curr = queue.shift();
      count++;
      res.push(curr);

      for (const next of itemGraph[curr]) {
        itemIndegree[next] -= 1;
        if (itemIndegree[next] === 0) {
          queue.push(next);
        }
      }
    }

    if (count !== groupItem[ans[i]].size) {
      return [];
    }
  }

  return res;
};
