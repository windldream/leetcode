/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const m = rooms.length;
  const visited = Array(m).fill(0);
  visited[0] = 1;
  for (const next of rooms[0]) {
    dfs(next, rooms);
  }
  return visited.every(val => val === 1);

  function dfs(i, rooms) {
    if (visited[i]) return;
    visited[i] = 1;
    for (const next of rooms[i]) {
      if (visited[next]) continue;
      dfs(next, rooms);
    }
  }
};

console.log(canVisitAllRooms([[1], [2], [3], []]));
