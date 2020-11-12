/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
var maxAliveYear = function (birth, death) {
  const ans = Array(101).fill(0)
  const len = birth.length
  for (let i = 0; i < len; i++) {
    for (let j = birth[i] - 1900; j <= death[i] - 1900; j++) {
      ans[j] += 1
    }
  }

  const max = Math.max(...ans)
  const index = ans.indexOf(max)
  return index + 1900
}

maxAliveYear(
  [1972, 1908, 1915, 1957, 1960, 1948, 1912, 1903, 1949, 1977, 1900, 1957, 1934, 1929, 1913, 1902, 1903, 1901],
  [1997, 1932, 1963, 1997, 1983, 2000, 1926, 1962, 1955, 1997, 1998, 1989, 1992, 1975, 1940, 1903, 1983, 1969]
)
