/**
 * 9. 回文数
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }

  let revNumber = 0
  while (x > revNumber) {
    revNumber = revNumber * 10 + (x % 10)
    x = Math.floor(x / 10)
  }

  return x === revNumber || x === Math.floor(revNumber / 10)
}

console.log(isPalindrome(121))
