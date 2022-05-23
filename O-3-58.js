/**
 * 58 - II. 左旋转字符串
 */

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  const str = s + s
  return str.slice(n, s.length + n)
}

console.log(reverseLeftWords('abcdefg', 2))
console.log(reverseLeftWords('lrloseumgh', 6))
