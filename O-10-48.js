/**
 * 48. 最长不含重复字符的子字符串
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map()
  let res = 0,
    tmp = 0
  for (let j = 0; j < s.length; j++) {
    let i = map.get(s.charAt(j)) !== undefined ? map.get(s.charAt(j)) : -1
    map.set(s.charAt(j), j)
    tmp = tmp < j - i ? tmp + 1 : j - i
    res = Math.max(res, tmp)
  }
  return res
}

console.log(lengthOfLongestSubstring('abcabcbb'))
