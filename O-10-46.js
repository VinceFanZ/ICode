/**
 * 46. 把数字翻译成字符串
 */

/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  let s = num.toString()
  let a = 1,
    b = 1
  for (let i = 2; i <= s.length; i++) {
    let tmp = s.slice(i - 2, i)
    let c = tmp - 10 >= 0 && tmp - 25 <= 0 ? a + b : a
    b = a
    a = c
  }
  return a
}

console.log(translateNum(12258))

var translateNum2 = function (num) {
  let a = 1,
    b = 1,
    x,
    y = num % 10
  while (num !== 0) {
    num = Math.floor(num / 10)
    x = num % 10
    let tmp = 10 * x + y
    let c = tmp >= 10 && tmp <= 25 ? a + b : a
    b = a
    a = c
    y = x
  }
  return a
}

console.log(translateNum2(12258))
