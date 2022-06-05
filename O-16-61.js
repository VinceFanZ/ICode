/**
 *  61. 扑克牌中的顺子
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
	let joker = 0
	nums = nums.sort((a, b) => a - b)
	for (let i = 0; i < 4; i++) {
		if (nums[i] === 0) joker++
		else if (nums[i] === nums[i + 1]) return false
	}
	return nums[4] - nums[joker] < 5
}

console.log(isStraight([1, 2, 3, 4, 5]))
