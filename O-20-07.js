/**
 * 07. 重建二叉树
 */

function TreeNode(val) {
	this.val = val
	this.left = this.right = null
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
	const dic = new Map()
	for (let i = 0; i < inorder.length; i++) {
		dic.set(inorder[i], i)
	}

	function recur(root, left, right) {
		if (left > right) return null
		let node = new TreeNode(preorder[root])
		let i = dic.get(preorder[root])
		node.left = recur(root + 1, left, i - 1)
		node.right = recur(root + i - left + 1, i + 1, right)
		return node
	}

	return recur(0, 0, inorder.length - 1)
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))

var myPow = function (x, n) {
	if (!x) return x
	return calculate(x, n)
}

const calculate = (x, n) => {
	// 所有数的0次幂都是1
	if (n === 0) {
		return 1
	}
	// 所有数的1次幂都是他本身
	if (n === 1) {
		return x
	}
	// 所有数的-1次幂都是他的倒数
	if (n === -1) {
		return 1 / x
	}
	// 下面是正常的幂指数
	let result = calculate(x, n >> 1)
	result *= result
	// 如果指数 n 是奇数，那么由于2倍2倍地进行减小，肯定会遗漏一次乘 x
	if (n & (1 === 1)) {
		result *= x
	}
	return result
}
