/**
 *  28. 对称的二叉树
 * @param {*} val
 */

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const recur = (left, right) => {
    if (!left && !right) {
      return true
    }
    if (!left || !right || left.val !== right.val) {
      return false
    }
    return recur(left.left, right.right) && recur(left.right, right.left)
  }
  return !root ? true : recur(root.left, root.right)
}

const t1 = new TreeNode(1)
t1.left = new TreeNode(2)
t1.right = new TreeNode(2)
t1.left.left = new TreeNode(3)
t1.left.right = new TreeNode(4)
t1.right.left = new TreeNode(4)
t1.right.right = new TreeNode(3)

console.log(isSymmetric(t1))
