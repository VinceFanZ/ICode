/**
 * 32 - I. 从上到下打印二叉树
 * BFS
 */

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) return []
  const queue = [root]
  const res = []

  while (queue.length > 0) {
    const node = queue.shift()
    res.push(node.val)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }

  return res
}

const t1 = new TreeNode(3)
t1.left = new TreeNode(9)
t1.right = new TreeNode(20)
t1.right.left = new TreeNode(15)
t1.right.right = new TreeNode(7)

console.log(levelOrder(t1))

/**
 * 32 - III. 从上到下打印二叉树 III
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder2 = function (root) {
  if (!root) return []
  const queue = [root]
  const res = []

  while (queue.length > 0) {
    const tmp = []
    let len = queue.length
    while (len > 0) {
      const node = queue.shift()
      if (res.length % 2 === 0) {
        tmp.push(node.val)
      } else {
        tmp.unshift(node.val)
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      --len
    }
    res.push(tmp)
  }

  return res
}

console.log(JSON.stringify(levelOrder2(t1)))
