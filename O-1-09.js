/**
 * 09. 用两个栈实现队列
 */

var CQueue = function () {
  this.stack1 = []
  this.stack2 = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack2.length > 0) {
    return this.stack2.pop()
  } else if (this.stack1.length > 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop())
    }
    return this.stack2.pop()
  } else {
    return -1
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 */

const value = ['CQueue', 'appendTail', 'deleteHead', 'deleteHead']
var obj = new CQueue()
obj.appendTail(value)
var param_2 = obj.deleteHead()
