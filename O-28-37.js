/**
 * 37. 序列化二叉树
 */

function TreeNode(val) {
	this.val = val
	this.left = this.right = null
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
	if (root === null) return 'X'
	const left = serialize(root.left)
	const right = serialize(root.right)

	return root.val + ',' + left + ',' + right
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
	const list = data.split(',')
	const buildTree = (list) => {
		const rooVal = list.shift()
		if (rooVal === 'X') return null
		const root = new TreeNode(rooVal)
		root.left = buildTree(list)
		root.right = buildTree(list)
		return root
	}

	return buildTree(list)
}

var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(5)

var a = serialize(root)
console.log(a)
console.log(deserialize(a))
