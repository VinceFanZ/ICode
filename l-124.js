/**
 * 124. 二叉树中的最大路径和
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER
  const maxGain = (node) => {
    if (!node) {
      return 0
    }
    let leftGain = Math.max(maxGain(node.left), 0)
    let rightGain = Math.max(maxGain(node.right), 0)

    let newPath = node.val + leftGain + rightGain

    maxSum = Math.max(maxSum, newPath)

    return node.val + Math.max(leftGain, rightGain)
  }
  maxGain(root)
  return maxSum
}

function cret(val, left, right) {
  return new TreeNode(val, left, right)
}

const test = cret(
  1,
  cret(2, cret(4), cret(5, cret(7), cret(8))),
  cret(3, undefined, cret(6))
)

console.log(maxPathSum(test))
