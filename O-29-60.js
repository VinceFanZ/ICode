/**
 * 60. n个骰子的点数
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
	let dp = new Array(n + 2).fill().map(() => new Array(n * 6 + 1).fill(0)),
		result = []

	for (let i = 1; i <= 6; i++) {
		dp[1][i] = 1
	}

	for (let i = 2; i <= n; i++) {
		for (let j = i; j <= 6 * i; j++) {
			for (let cur = 1; cur <= 6; cur++) {
				if (j <= cur) {
					break
				}
				dp[i][j] += dp[i - 1][j - cur]
			}
		}
	}
	let all = Math.pow(6, n)
	for (let i = n; i <= n * 6; i++) {
		result.push(dp[n][i] / all)
	}
	return result
}

console.log(dicesProbability(2))
