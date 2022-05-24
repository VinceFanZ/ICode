/**
 * 53 - I. 在排序数组中查找数字 I
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let i = 0,
    j = nums.length - 1
  let left = 0,
    right = 0
  while (i <= j) {
    let mid = Math.floor((i + j) / 2)
    if (nums[mid] <= target) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  right = i
  if (j >= 0 && nums[j] !== target) {
    return 0
  }
  ;(i = 0), (j = nums.length - 1)
  while (i <= j) {
    let mid = Math.floor((i + j) / 2)
    if (nums[mid] < target) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  left = j

  return right - left - 1
}

// console.log(search([5, 7, 7, 8, 8, 10], 8))

/**
 * 53 - II. 0～n-1中缺失的数字
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let i = 0,
    j = nums.length - 1
  while (i <= j) {
    let m = Math.floor((i + j) / 2)
    if (nums[m] === m) {
      i = m + 1
    } else {
      j = m - 1
    }
  }
  return i
}

console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]))
console.log(missingNumber([1]))
console.log(missingNumber([1, 2]))
