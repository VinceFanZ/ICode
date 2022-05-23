/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let str = ''

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === ' ') {
      str += '%20'
      continue
    }
    str += s.charAt(i)
  }

  return str
}

console.log(replaceSpace('We are happy.'))
