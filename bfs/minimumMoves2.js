/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
  const n = grid.length;
  const HORIZONTAL = 1;
  const VERTICAL = 2;
  const visited = new Set();
  const queue = [];
  queue.push([[0, 0], [0, 1], HORIZONTAL]);
  visited.add([0, 0].join('$') + '#' + [0, 1].join('$') + '#' + HORIZONTAL);

  let step = 0;
  while (queue.length) {
    for (let len = queue.length - 1; len >= 0; len--) {
      const [tail, head, dir] = queue.shift();
      const [headR, headC] = head;
      const [tailR, tailC] = tail;
      if (
        tailR === n - 1 &&
        tailC === n - 2 &&
        headR === n - 1 &&
        headC === n - 1
      ) {
        return step;
      }
      if (dir === HORIZONTAL) {
        if (
          isValid(tailR + 1, tailC) &&
          isValid(headR + 1, headC) &&
          !visited.has(
            [tailR + 1, tailC].join('$') +
              '#' +
              [headR + 1, headC].join('$') +
              '#' +
              HORIZONTAL
          )
        ) {
          // if (
          //   visited.has(
          //     [tailR + 1, tailC].join('$') +
          //       '#' +
          //       [headR + 1, headC].join('$') +
          //       '#' +
          //       HORIZONTAL
          //   )
          // )
          //   continue;
          queue.push([[tailR + 1, tailC], [headR + 1, headC], HORIZONTAL]);
          visited.add(
            [tailR + 1, tailC].join('$') +
              '#' +
              [headR + 1, headC].join('$') +
              '#' +
              HORIZONTAL
          );
        }
        if (
          isValid(headR, headC + 1) &&
          !visited.has(
            [headR, headC].join('$') +
              '#' +
              [headR, headC + 1].join('$') +
              '#' +
              HORIZONTAL
          )
        ) {
          queue.push([[headR, headC], [headR, headC + 1], HORIZONTAL]);
          visited.add(
            [headR, headC].join('$') +
              '#' +
              [headR, headC + 1].join('$') +
              '#' +
              HORIZONTAL
          );
        }

        if (
          isValid(tailR + 1, tailC) &&
          isValid(headR + 1, headC) &&
          !visited.has(
            [tailR, tailC].join('$') +
              '#' +
              [tailR + 1, tailC].join('$') +
              '#' +
              VERTICAL
          )
        ) {
          queue.push([[tailR, tailC], [tailR + 1, tailC], VERTICAL]);
          visited.add(
            [tailR, tailC].join('$') +
              '#' +
              [tailR + 1, tailC].join('$') +
              '#' +
              VERTICAL
          );
        }
      }

      if (dir === VERTICAL) {
        if (
          isValid(tailR, tailC + 1) &&
          isValid(headR, headC + 1) &&
          !visited.has(
            [tailR, tailC + 1].join('$') +
              '#' +
              [headR, headC + 1].join('$') +
              '#' +
              VERTICAL
          )
        ) {
          queue.push([[tailR, tailC + 1], [headR, headC + 1], VERTICAL]);
          visited.add(
            [tailR, tailC + 1].join('$') +
              '#' +
              [headR, headC + 1].join('$') +
              '#' +
              VERTICAL
          );
        }

        if (
          isValid(headR + 1, headC) &&
          !visited.has(
            [headR, headC].join('$') +
              '#' +
              [headR + 1, headC].join('$') +
              '#' +
              VERTICAL
          )
        ) {
          queue.push([[headR, headC], [headR + 1, headC], VERTICAL]);
          visited.add(
            [headR, headC].join('$') +
              '#' +
              [headR + 1, headC].join('$') +
              '#' +
              VERTICAL
          );
        }

        if (
          isValid(tailR, tailC + 1) &&
          isValid(headR, headC + 1) &&
          !visited.has(
            [tailR, tailC].join('$') +
              '#' +
              [tailR, tailC + 1].join('$') +
              '#' +
              HORIZONTAL
          )
        ) {
          queue.push([[tailR, tailC], [tailR, tailC + 1], HORIZONTAL]);
          visited.add(
            [tailR, tailC].join('$') +
              '#' +
              [tailR, tailC + 1].join('$') +
              '#' +
              HORIZONTAL
          );
        }
      }
    }
    step++;
  }
  return -1;

  function isValid(i, j) {
    return i >= 0 && i < n && j >= 0 && j < n && grid[i][j] === 0;
  }
};
