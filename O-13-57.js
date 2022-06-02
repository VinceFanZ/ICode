/**
 * 57. 和为s的两个数字
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0,
    j = nums.length - 1
  while (i < j) {
    let s = nums[i] + nums[j]
    if (s < target) {
      i++
    } else if (s > target) {
      j--
    } else {
      return [nums[i], nums[j]]
    }
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
