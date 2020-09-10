// 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。
//
// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
//
// 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    const helper = (index, profit, isCoolDown, isSell) => {
        if (index === prices.length) {
            return 0
        }
        let sell = 0
        let buy = 0
        let other = 0
        if (isCoolDown) {
            return helper(index + 1, profit, false)
        }
        if (isSell) {
            buy = helper(index + 1, profit - prices[index], false)
            other = helper(index + 1, profit, false)
            return Math.max(buy, other)
        }
        sell = helper(index + 1, profit + prices[index], true)
        other = helper(index + 1, profit, false)
        return Math.max(sell, other)
    }
    return helper(0, 0, false, false)
}

console.log(maxProfit([1,2,3,0,2]))
