/**
 * 45. 把数组排成最小的数
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
	return nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join('')
}

console.log(minNumber([10, 2]))
