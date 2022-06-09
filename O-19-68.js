/**
 * 68 - I. 二叉搜索树的最近公共祖先
 */

function TreeNode(val) {
	this.val = val
	this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	if (p.val > q.val) {
		let tmp = p
		p = q
		q = tmp
	} // q.val < p.val

	while (root) {
		if (root.val < p.val) {
			root = root.right
		} else if (root.val > q.val) {
			root = root.left
		} else {
			break
		}
	}
	return root
}

const tree = new TreeNode(3)
tree.left = new TreeNode(1)
tree.left.right = new TreeNode(2)
tree.right = new TreeNode(4)

console.log(lowestCommonAncestor(tree))

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	if (root === null || root === p || root === q) return root
	let left = lowestCommonAncestor(root.left, p, q)
	let right = lowestCommonAncestor(root.right, p, q)
	if (left === null) return right
	if (right === null) return left
	return root
}
