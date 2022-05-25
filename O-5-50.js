/**
 * 50. 第一个只出现一次的字符
 */

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (s.length === 0) {
    return ' '
  }
  if (s.length === 1) {
    return s
  }

  let i = 0
  let obj = Object.create(null)
  while (i < s.length) {
    const c = s.charAt(i)
    if (c !== s.charAt(i + 1)) {
      if (obj[c]) {
        obj[c] = obj[c] + 1
      } else {
        obj[c] = 1
      }
      ++i
    } else {
      obj[c] = 2
      i = i + 2
    }
  }

  for (const key in obj) {
    console.log(key)
    if (obj[key] === 1) {
      return key
    }
  }

  return ' '
}

console.log(firstUniqChar('abaccdeff'))
