/**
 * 27. 二叉树的镜像
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) {
    return null
  }
  const left = root.left
  const right = root.right
  root.left = right
  root.right = left
  mirrorTree(root.left)
  mirrorTree(root.right)

  return root
}

const t1 = new TreeNode(4)
t1.left = new TreeNode(2)
t1.right = new TreeNode(7)
t1.left.left = new TreeNode(1)
t1.left.right = new TreeNode(3)
t1.right.left = new TreeNode(6)
t1.right.right = new TreeNode(9)

console.log(mirrorTree(t1))
