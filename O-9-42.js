/**
 * 42. 连续子数组的最大和
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = []
  let max = (dp[0] = nums[0])
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    max = Math.max(max, dp[i])
  }
  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
