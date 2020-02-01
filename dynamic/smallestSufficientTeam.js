/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
  const len = req_skills.length,
    target = (1 << len) - 1,
    skills = [];

  // 将技能使用技能对应的索引的组合表示
  // 如果要掌握所有的技能则 target = 2 ** len - 1
  for (const p of people) {
    let mask = 0;
    for (const str of p) {
      mask |= 1 << req_skills.indexOf(str);
    }
    skills.push(mask);
  }

  const dp = Array(1 << len).fill(2 << 16);
  const parent = Array(1 << len)
    .fill(0)
    .map(() => []);
  dp[0] = 0;
  for (let i = 0; i < people.length; i++) {
    const k = skills[i];
    if (k === 0) {
      continue;
    }
    for (let j = target; j >= 0; j--) {
      if (dp[j] + 1 < dp[j | k]) {
        dp[j | k] = dp[j] + 1;
        parent[j | k] = [j, i];
      }
    }
  }

  let t = target;
  const res = [];
  while (t) {
    res.push(parent[t][1]);
    t = parent[t][0];
  }
  return res;
};

console.log(
  smallestSufficientTeam(
    ['java', 'nodejs', 'reactjs'],
    [['java'], ['nodejs'], ['nodejs', 'reactjs']]
  )
);
