/**
 * 33. 二叉搜索树的后序遍历序列
 */

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
	function recur(postorder, i, j) {
		if (i >= j) return true
		let p = i
		while (postorder[p] < postorder[j]) p++
		let m = p
		while (postorder[p] > postorder[j]) p++
		return p === j && recur(postorder, i, m - 1) && recur(postorder, m, j - 1)
	}

	return recur(postorder, 0, postorder.length - 1)
}

console.log(verifyPostorder([1, 6, 3, 2, 5]))
