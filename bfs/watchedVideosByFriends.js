/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function(watchedVideos, friends, id, level) {
  const queue = [];
  const visited = new Set();
  visited.add(id);
  for (let i = 0; i < friends[id].length; i++) {
    queue.push(friends[id][i]);
    visited.add(friends[id][i]);
  }

  let l = 0;
  let hash = {};
  while (queue.length) {
    if (l === level) {
      break;
    }
    hash = {};
    for (let len = queue.length - 1; len >= 0; len--) {
      const id = queue.shift();
      for (const video of watchedVideos[id]) {
        if (!hash[video]) {
          hash[video] = 0;
        }
        hash[video] += 1;
      }
      for (const newId of friends[id]) {
        if (visited.has(newId)) continue;
        queue.push(newId);
        visited.add(newId);
      }
    }
    l++;
  }

  const res = [];
  for (const key in hash) {
    res.push(key);
  }
  res.sort((a, b) => {
    if (hash[a] !== hash[b]) {
      return hash[a] - hash[b];
    } else {
      return a > b ? 1 : a === b ? 0 : -1;
    }
  });

  return res;
};
