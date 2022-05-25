/**
 * 11. 旋转数组的最小数字
 */

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let i = 0,
    j = numbers.length - 1
  while (i < j) {
    let m = Math.floor((i + j) / 2)
    if (numbers[m] > numbers[j]) {
      i = m + 1
    } else if (numbers[m] < numbers[j]) {
      j = m
    } else {
      j--
    }
  }

  return numbers[i]
}

console.log(minArray([3, 4, 5, 1, 2]))

console.log(minArray([2, 2, 2, 0, 1]))
