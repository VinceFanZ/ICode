/**
 * 21. 调整数组顺序使奇数位于偶数前面
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let i = 0,
    j = nums.length - 1,
    tmp
  while (i < j) {
    while (i < j && (nums[i] & 1) === 1) {
      i++
    }
    while (i < j && (nums[j] & 1) === 0) {
      j--
    }
    tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }
  return nums
}

console.log(exchange([6, 2, 3, 4]))
console.log(exchange([2, 16, 3, 5, 13, 1, 16, 1, 12, 18, 11, 8, 11, 11, 5, 1]))
