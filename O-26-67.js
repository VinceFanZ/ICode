/**
 * 67. 把字符串转换成整数
 */

/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
	let res = 0,
		neSymbol = 1
	str = str.trim()

	for (let i = 0; i < str.length; i++) {
		if (i === 0 && str[i] === '-') {
			neSymbol = -1
			continue
		} else if (i === 0 && str[i] === '+') {
			continue
		}

		if (str[i] >= 0 && str[i] <= 9 && str[i] !== ' ') {
			res = res * 10 + (str[i] - 0)
			if (res * neSymbol <= -2147483648) return -2147483648
			else if (res * neSymbol >= 2147483647) return 2147483647
		} else {
			break
		}
	}
	return res * neSymbol
}

console.log(strToInt('4193 with words'))
