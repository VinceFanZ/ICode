/**
 * 26. 树的子结构
 */

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A || !B) {
    return false
  }
  return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

function recur(A, B) {
  if (!B) {
    return true
  }
  if (!A) {
    return false
  }
  if (A.val !== B.val) {
    return false
  }
  return recur(A.left, B.left) && recur(A.right, B.right)
}

const t1 = new TreeNode(3)
t1.left = new TreeNode(9)
t1.right = new TreeNode(20)
t1.right.left = new TreeNode(15)
t1.right.right = new TreeNode(7)

const t2 = new TreeNode(20)
t2.left = new TreeNode(15)
t2.right = new TreeNode(7)

console.log(isSubStructure(t1, new TreeNode()))
