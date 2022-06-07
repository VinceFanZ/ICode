/**
 * 55 - I. 二叉树的深度
 */

function TreeNode(val) {
	this.val = val
	this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	if (!root) return 0

	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

const tree = new TreeNode(3)
tree.left = new TreeNode(1)
tree.left.right = new TreeNode(2)
tree.right = new TreeNode(4)

// console.log(maxDepth(tree))

/**
 * 55 - II. 平衡二叉树
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
	if (!root) return true
	return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}
function depth(root) {
	if (!root) return 0
	return Math.max(depth(root.left), depth(root.right)) + 1
}

const tree2 = new TreeNode(3)
tree2.left = new TreeNode(9)
tree2.right = new TreeNode(20)
tree2.right.left = new TreeNode(15)
tree2.right.right = new TreeNode(7)

console.log(isBalanced(tree2))
