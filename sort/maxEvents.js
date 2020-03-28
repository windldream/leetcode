/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
  events.sort((a, b) => {
    return a[1] - b[1];
  });

  const set = new Set();
  for (const [start, end] of events) {
    for (let i = start; i <= end; i++) {
      if (!set.has(i)) {
        set.add(i);
        break;
      }
    }
  }
  return set.size;
};
