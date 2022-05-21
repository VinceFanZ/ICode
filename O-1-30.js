/**
 * 30. 包含min函数的栈
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.stack2 = [Infinity]
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  this.stack2.push(Math.min(this.stack2[this.stack2.length - 1], x))
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
  this.stack2.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.stack2[this.stack2.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
