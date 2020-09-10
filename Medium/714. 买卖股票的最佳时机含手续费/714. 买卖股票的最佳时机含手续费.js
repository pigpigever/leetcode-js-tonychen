/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = function(prices, fee) {
    const helper = (index, isBuy, isNoAction) => {
        if (index >= prices.length) {
            return 0
        }
        const key = `${index}-${isBuy}-${isNoAction}`
        if (map.get(key)) {
            return map.get(key)
        }
        let sell = 0
        let buy = 0
        let noAction = 0
        if (isBuy) {
            sell = prices[index] - fee + helper(index + 1, false,  false)
        } else {
            buy = -prices[index] + helper(index + 1, true, false)
        }
        noAction = helper(index + 1, isBuy, true)
        map.set(key, Math.max(noAction, Math.max(sell, buy)))
        return map.get(key)
    }
    if (!prices.length) {
        return 0
    }
    const map = new Map()
    return helper(0, false, true)
}

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))
