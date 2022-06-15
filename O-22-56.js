/**
 * 56 - I. 数组中数字出现的次数
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
	let x = 0,
		y = 0,
		n = 0,
		m = 1
	for (const num of nums) {
		n = n ^ num
	}
	while ((n & m) === 0) {
		m = m << 1
	}
	for (const num of nums) {
		if ((num & m) !== 0) x = x ^ num
		else y = y ^ num
	}
	return [x, y]
}

console.log(singleNumbers([4, 1, 4, 6]))
