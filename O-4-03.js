/**
 * 03. 数组中重复的数字
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const obj = Object.create(null)
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (obj[num]) {
      obj[num] = obj[num] + 1
      return num
    } else {
      obj[num] = 1
    }
  }
}

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))
