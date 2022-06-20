/**
 * 59 - I. 滑动窗口的最大值
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	if (nums.length === 0 || k === 0) return []
	const deque = []
	const res = new Array(nums.length - k + 1)
	for (let i = 0; i < k; i++) {
		while (deque.length && deque[deque.length - 1] < nums[i]) deque.pop()
		deque.push(nums[i])
	}
	res[0] = deque[0]
	for (let i = k; i < nums.length; i++) {
		if (deque[0] === nums[i - k]) {
			deque.shift()
		}
		while (deque.length && deque[deque.length - 1] < nums[i]) deque.pop()
		deque.push(nums[i])

		res[i - k + 1] = deque[0]
	}

	return res
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))

/**
 * 59 - II. 队列的最大值
 */

var MaxQueue = function () {
	this.queue = []
	this.maxStack = []
}

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
	return this.maxStack.length > 0 ? this.maxStack[0] : -1
}

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
	this.queue.push(value)
	while (this.maxStack.length > 0 && this.maxStack[this.maxStack.length - 1] < value) {
		this.maxStack.pop()
	}
	this.maxStack.push(value)
}

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
	if (this.queue.length === 0) return -1
	let ans = this.queue.shift()
	if (ans === this.maxStack[0]) {
		this.maxStack.shift()
	}
	return ans
}

// var value = ['MaxQueue', 'push_back', 'push_back', 'max_value', 'pop_front', 'max_value']
// var obj = new MaxQueue()
// var param_1 = obj.max_value()
// obj.push_back(value)
// var param_3 = obj.pop_front()
