/**
 * 58 - I. 翻转单词顺序
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim().split(' ')
  let res = []
  for (let i = s.length - 1; i >= 0; i--) {
    s[i] && res.push(s[i])
  }
  return res.join(' ')
}

console.log(reverseWords('the sky is blue.'))
console.log(reverseWords('a good   example'))
