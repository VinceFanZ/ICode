/**
 * 10- I. 斐波那契数列
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let a = 0,
    b = 1,
    sum
  for (let i = 0; i < n; i++) {
    sum = (a + b) % 1000000007
    a = b
    b = sum
  }
  return a
}

console.log(fib(100))

/**
 * 10- II. 青蛙跳台阶问题
 */

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  let a = 1,
    b = 1,
    sum
  for (let i = 0; i < n; i++) {
    sum = (a + b) % 1000000007
    a = b
    b = sum
  }
  return a
}

console.log(numWays(7))
