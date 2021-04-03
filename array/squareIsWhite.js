/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const col = coordinates[0].charCodeAt() - 'a'.charCodeAt()
  const row = +coordinates[1]
  if (row & 1) {
    return (col & 1) > 0
  } else {
    return (col & 1) === 0
  }
}
