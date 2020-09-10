/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = function(numBottles, numExchange) {
    let drink = 0
    while (numBottles >= numExchange) {
        // 可以兑换的酒的酒的数量
        const exchange = Math.floor(numBottles / numExchange)
        // 当前已经喝掉的酒的数量
        const currDrink = exchange * numExchange
        // 总共喝掉的酒的数量
        drink += currDrink
        numBottles = numBottles - currDrink + exchange
        console.log(exchange, currDrink, numBottles)
    }
    return drink + numBottles
}

console.log(numWaterBottles(9, 3))
