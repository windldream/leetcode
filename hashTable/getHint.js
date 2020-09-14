/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const secretMap = new Map()
  let bulls = 0
  let cows = 0
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++
      continue
    }
    if (!secretMap.has(secret[i])) {
      secretMap.set(secret[i], 0)
    }
    secretMap.set(secret[i], secretMap.get(secret[i]) + 1)
  }

  for (let i = 0; i < guess.length; i++) {
    if (secret[i] === guess[i]) {
      continue
    }
    if (secretMap.has(guess[i]) && secretMap.get(guess[i]) > 0) {
      cows++
      secretMap.set(guess[i], secretMap.get(guess[i]) - 1)
    }
  }

  return bulls + 'A' + cows + 'B'
}

getHint('11', '10')
