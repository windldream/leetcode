/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
  const map = {};
  for (const vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      if (!map[vote[i]]) {
        map[vote[i]] = Array(vote.length).fill(0);
      }
      map[vote[i]][i] += 1;
    }
  }

  const res = votes[0].split('');
  const len = res.length;
  res.sort((a, b) => {
    let i = 0;
    while (map[a][i] === map[b][i] && i < len) {
      i++;
    }
    if (i === len) {
      return a > b ? 1 : a === b ? 0 : -1;
    }
    return map[b][i] - map[a][i];
  });

  return res.join('');
};

console.log(rankTeams(['BCA', 'CAB', 'CBA', 'ABC', 'ACB', 'BAC']));
