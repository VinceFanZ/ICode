/**
 * 39. 数组中出现次数超过一半的数字
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let x = 0,
		votes = 0
	nums.forEach((num) => {
		if (votes === 0) x = num
		votes = num === x ? votes + 1 : votes - 1
	})
	return x
}

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))
