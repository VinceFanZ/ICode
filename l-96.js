/**
 * 96. 不同的二叉搜索树
 */

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    console.log("=====", i);
    for (let j = 1; j <= i; j++) {
      console.log("++++++", i, j);
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  console.log(dp);

  return dp[n];
};

var numTrees2 = function (n) {
  let C = 1;

  for (let i = 0; i < n; i++) {
    C = (C * 2 * (2 * i + 1)) / (i + 2);
  }

  return C;
};

console.log(numTrees(3));

console.log(numTrees2(3));
