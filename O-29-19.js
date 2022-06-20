/**
 * 19. 正则表达式匹配
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
	let m = s.length + 1,
		n = p.length + 1
	let dp = new Array(m).fill(false).map((item) => new Array(n).fill(false))
	dp[0][0] = true

	for (let j = 2; j < n; j += 2) {
		dp[0][j] = dp[0][j - 2] && p.charAt(j - 1) === '*'
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			if (p.charAt(j - 1) === '*') {
				if (dp[i][j - 2]) dp[i][j] = true
				else if (dp[i - 1][j] && s.charAt(i - 1) === p.charAt(j - 2)) dp[i][j] = true
				else if (dp[i - 1][j] && p.charAt(j - 2) === '.') dp[i][j] = true
			} else {
				if (dp[i - 1][j - 1] && s.charAt(i - 1) === p.charAt(j - 1)) dp[i][j] = true
				else if (dp[i - 1][j - 1] && p.charAt(j - 1) === '.') dp[i][j] = true
			}
		}
	}

	return dp[m - 1][n - 1]
}

console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', 'a*'))
console.log(isMatch('ab', '.*'))
console.log(isMatch('aab', 'c*a*b'))
console.log(isMatch('mississippi', 'mis*is*p*.'))
