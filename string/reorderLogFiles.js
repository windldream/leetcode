/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const letterLogs = []
  const numberLogs = []
  for (const log of logs) {
    const list = log.split(' ')
    if (/\d/.test(list[1])) {
      numberLogs.push(log)
    } else {
      letterLogs.push(log)
    }
  }

  letterLogs.sort((a, b) => {
    const str1 = a.split(' ').slice(1).join(' ')
    const str2 = b.split(' ').slice(1).join(' ')
    if (str1 === str2) {
      return a.split(' ')[0].localeCompare(b.split(' ')[0])
    }
    return str1.localeCompare(str2)
  })

  return [...letterLogs, ...numberLogs]
}

reorderLogFiles(['j mo', '5 m w', 'g 07', 'o 2 0', 't q h'])
