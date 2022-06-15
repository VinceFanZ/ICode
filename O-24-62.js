/**
 * 62. 圆圈中最后剩下的数字
 */

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
	let x = 0
	for (let i = 2; i <= n; i++) {
		x = (x + m) % i
	}
	return x
}

console.log(lastRemaining(5, 3))
