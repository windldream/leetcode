/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  const res = []
  let a = 0
  let b = 0
  while (a < A.length && b < B.length) {
    if (A[a][0] > B[b][1]) {
      b++
    } else if (A[a][1] < B[b][0]) {
      a++
    } else {
      if (A[a][0] > B[b][0]) {
        if (A[a][1] > B[b][1]) {
          res.push([A[a][0], B[b][1]])
          b++
        } else {
          res.push([A[a][0], A[a][1]])
          a++
        }
      } else {
        if (A[a][1] < B[b][1]) {
          res.push([B[b][0], A[a][1]])
          a++
        } else {
          res.push([B[b][0], B[b][1]])
          b++
        }
      }
    }
  }
  return res
}
