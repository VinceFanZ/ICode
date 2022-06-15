/**
 * 15. 二进制中1的个数
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	let res = 0
	while (n != 0) {
		res++
		n = n & (n - 1)
	}
	return res
}

// console.log(hammingWeight(0b00000000000000000000000000001011))

/**
 * 65. 不用加减乘除做加法
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
	while (b !== 0) {
		// 当进位为 0 时跳出
		let c = (a & b) << 1 // c = 进位
		a ^= b // a = 非进位和
		b = c // b = 进位
	}
	return a
}

console.log(add(1, 1))
