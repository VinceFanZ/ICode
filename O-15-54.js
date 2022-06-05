/**
 * 54. 二叉搜索树的第k大节点
 */

function TreeNode(val) {
	this.val = val
	this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
	let res = []

	function bfs(node) {
		if (!node) return
		bfs(node.right)
		res.push(node.val)
		bfs(node.left)
	}
	bfs(root)
	return res[k - 1]
}

const tree = new TreeNode(3)
tree.left = new TreeNode(1)
tree.left.right = new TreeNode(2)
tree.right = new TreeNode(4)

console.log(kthLargest(tree, 1))
