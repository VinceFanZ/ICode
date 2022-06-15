/**
 * 57 - II. 和为s的连续正数序列
 */

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
	let i = 1,
		j = 2,
		s = 3
	let res = []
	while (i < j) {
		if (s === target) {
			let ans = new Array(j - i + 1)
			for (let k = i; k <= j; k++) {
				ans[k - i] = k
			}
			res.push(ans)
		}
		if (s >= target) {
			s -= i
			i++
		} else {
			j++
			s += j
		}
	}
	return res
}

console.log(findContinuousSequence(9))
