/**
 * 29. 顺时针打印矩阵
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	if (matrix.length === 0) return []
	let l = 0,
		r = matrix[0].length - 1,
		t = 0,
		b = matrix.length - 1,
		x = 0
	let res = new Array((r + 1) * (b + 1))
	while (true) {
		for (let i = l; i <= r; i++) {
			res[x++] = matrix[t][i]
		}
		if (++t > b) break
		for (let i = t; i <= b; i++) {
			res[x++] = matrix[i][r]
		}
		if (l > --r) break
		for (let i = r; i >= l; i--) {
			res[x++] = matrix[b][i]
		}
		if (t > --b) break
		for (let i = b; i >= t; i--) {
			res[x++] = matrix[i][l]
		}
		if (++l > r) break
	}
	return res
}

console.log(
	spiralOrder([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	])
)
