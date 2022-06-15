/**
 * 20. 表示数值的字符串
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
	let i,
		len,
		numFlag = false,
		dotFlag = false,
		eFlag = false
	s = s.trim()
	len = s.length
	for (i = 0; i < len; i++) {
		if (s[i] >= '0' && s[i] <= 9) {
			numFlag = true
		} else if (s[i] === '.' && !dotFlag && !eFlag) {
			dotFlag = true
		} else if ((s[i] === 'e' || s[i] === 'E') && !eFlag && numFlag) {
			eFlag = true
			numFlag = false
		} else if ((s[i] === '+' || s[i] === '-') && (i === 0 || s[i - 1] === 'e' || s[i - 1] === 'E')) {
			//
		} else {
			return false
		}
	}

	return numFlag
}

console.log(isNumber('0'))
console.log(isNumber('e'))
