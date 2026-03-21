/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const visited = new Map()
  const match = (i, j) => {
    if (i === s.length && j === p.length) {
      return true
    }
    const key = `${i}-${j}`
    if (visited.has(key)) {
      return false
    }
    visited.set(key, true)
    const pattern = p[j]
    if (pattern === '*') {
      if (!s[i]) return match(i, j + 1)
      const skipPattern = match(i, j + 1)
      const skipWord = match(i + 1, j)
      const nextWord = match(i + 1, j + 1)
      return skipPattern || skipWord || nextWord
    } else if (pattern === '?') {
      if (!s[i]) return false
      return match(i + 1, j + 1)
    } else {
      if (s[i] === p[j]) return match(i + 1, j + 1)
      return false
    }
  }
  if (!s && !p) {
    return true
  } else if (s && !p) {
    return false
  }
  return match(0, 0)
};

// console.log('is match', isMatch('adceb', '*a*b'))
console.log('is match', isMatch('aaaaa', '*b'))