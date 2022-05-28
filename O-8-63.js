/**
 * 63. 股票的最大利润
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let cost = Number.MAX_SAFE_INTEGER,
    profit = 0
  for (let i = 0; i < prices.length; i++) {
    cost = Math.min(cost, prices[i])
    profit = Math.max(profit, prices[i] - cost)
  }

  return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
