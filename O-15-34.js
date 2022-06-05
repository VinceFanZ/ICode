/**
 * 34. 二叉树中和为某一值的路径
 */

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
	if (!root) return []
	let res = []
	function dfs(node, sum, path) {
		debugger
		if (!node) return false
		let { left, right, val } = node
		path.push(val)
		// 所有链路跑一边，跑到最后符合条件的就是结果.
		if (val === sum && !left && !right) res.push(path)

		dfs(left, sum - val, path.slice())
		dfs(right, sum - val, path.slice())
	}

	dfs(root, target, [])
	return res
}

const tree = new TreeNode(
	5,
	new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
	new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(5), new TreeNode(1)))
)

console.log(pathSum(tree, 22))
