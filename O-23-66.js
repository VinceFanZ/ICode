/**
 * 66. 构建乘积数组
 */

/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
	let len = a.length
	if (len === 0) return [0]
	let B = []
	B[0] = 1
	let tmp = 1

	for (let i = 1; i < len; i++) {
		debugger
		B[i] = B[i - 1] * a[i - 1]
	}
	for (let i = len - 2; i >= 0; i--) {
		tmp = tmp * a[i + 1]
		B[i] = B[i] * tmp
	}
	return B
}

console.log(constructArr([1, 2, 3, 4, 5]))
