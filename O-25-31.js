/**
 * 31. 栈的压入、弹出序列
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
	let statck = []
	let i = 0
	pushed.forEach((num) => {
		statck.push(num)
		while (statck.length !== 0 && statck[statck.length - 1] === popped[i]) {
			statck.pop()
			i++
		}
	})

	return statck.length === 0
}

var pushed = [1, 2, 3, 4, 5],
	popped = [4, 3, 5, 2, 1]
console.log(validateStackSequences(pushed, popped))
