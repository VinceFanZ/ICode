/**
 * 13. 机器人的运动范围
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
	let visited = new Array(m).fill(0).map((item) => new Array(n).fill(0))
	var dfs = function (x, y) {
		if (sums(x) + sums(y) > k || x >= m || y >= n || visited[x][y]) return 0
		else {
			visited[x][y] = 1
			return 1 + dfs(x + 1, y) + dfs(x, y + 1)
		}
	}

	return dfs(0, 0)
}

var sums = function (x) {
	let s = 0
	while (x !== 0) {
		s += x % 10
		x = Math.floor(x / 10)
	}
	return s
}

console.log(movingCount(2, 3, 1))
