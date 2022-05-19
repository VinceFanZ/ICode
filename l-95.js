/**
 * 95. 不同的二叉搜索树 II
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) {
    return [];
  }

  return gen(1, n);
};

var gen = function (start, end) {
  let str = Math.random().toString(16).slice(2);

  const res = [];
  console.log(str + " start " + start + " end ", end);
  if (start > end) {
    res.push(null);
    return res;
  }
  for (let i = start; i <= end; i++) {
    const leftTree = gen(start, i - 1);
    console.log(str + " leftTree ", leftTree);
    const rightTree = gen(i + 1, end);
    console.log(str + " rightTree ", rightTree);
    for (const left of leftTree) {
      console.log(str + " left ", left);
      for (const right of rightTree) {
        console.log(str + " right ", right);
        res.push(new TreeNode(i, left, right));
        console.log(str, JSON.stringify(res));
      }
    }
  }
  console.log(str + '=====');
  return res;
};

console.log(generateTrees(3));
