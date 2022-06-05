/**
 * 36. 二叉搜索树与双向链表
 */

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
	let pre, head
	if (!root) return null
	dfs(root)
	head.left = pre
	pre.right = head
	return head

	function dfs(node) {
		if (!node) return
		dfs(node.left)
		if (pre) pre.right = node
		else head = node
		node.left = pre
		pre = node
		dfs(node.right)
	}
}

const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(5))

console.log(treeToDoublyList(tree))
