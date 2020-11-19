class Fraction {
  constructor(n, d) {
    const g = this.gcd(n, d)
    this.n = n / g
    this.d = d / g
  }

  add(other) {
    const numerator = this.n * other.d + this.d * other.n
    const denominator = this.d * other.d
    const g = this.gcd(numerator, denominator)
    this.n = numerator / g
    this.d = denominator / g
  }

  gcd(x, y) {
    return x === 0n ? y : this.gcd(y % x, x)
  }
}

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var isRationalEqual = function (S, T) {
  const f1 = convert(S)
  const f2 = convert(T)
  return f1.n === f2.n && f1.d === f2.d

  function convert(S) {
    const ans = new Fraction(0n, 1n)
    let state = 0
    let decimalSize = 0

    for (const part of S.split(/[.()]/)) {
      state++
      if (part.length === 0) continue
      const x = BigInt(part)
      const len = part.length
      if (state === 1) {
        ans.add(new Fraction(x, 1n))
      } else if (state === 2) {
        ans.add(new Fraction(x, BigInt(10 ** len)))
        decimalSize = len
      } else {
        let denom = BigInt(10 ** decimalSize)
        denom *= BigInt(10 ** len - 1)
        ans.add(new Fraction(x, denom))
      }
    }

    return ans
  }
}

isRationalEqual('0.(52)', '0.5(25)')
