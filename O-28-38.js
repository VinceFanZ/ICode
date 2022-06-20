/**
 * 38. 字符串的排列
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
	let res = []
	const dfs = (s, path, keys) => {
		if (path.length === s.length) {
			let val = path.slice().join('')
			if (res.indexOf(val) < 0) res.push(val)
			return
		}
		for (let i = 0; i < s.length; i++) {
			let pathKey = i + '&' + s[i]
			if (keys.indexOf(pathKey) > -1) continue
			keys.push(pathKey)
			path.push(s[i])
			dfs(s, path, keys)
			path.pop()
			keys.pop()
		}
	}

	dfs(s, [], [])
	return res
}

console.log(permutation('abc'))
