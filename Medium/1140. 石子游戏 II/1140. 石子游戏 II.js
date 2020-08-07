/**
 * @param {number[]} piles
 * @return {number}
 */
const stoneGameII = function(piles) {
    const helper = (M, index) => {
        const key = `${M}-${index}`
        if (map.has(key)) {
            return map.get(key)
        }
        if (piles.length <= 0) {
            return 0
        }
        if (piles.length - index <= 2 * M) {
            return sum[index]
        }
        let res = 0
        for (let i = 1; i <= 2* M && i + index < piles.length; i++) {
            res = Math.max(res, sum[index] - helper(Math.max(i, M), index + i))
        }
        map.set(key, res)
        return res
    }
    if (!piles.length) {
        return 0
    }
    const map = new Map()
    const sum = new Array(piles.length)
    sum[sum.length - 1] = piles[piles.length - 1]
    for (let i = piles.length - 2; i >= 0; i--) {
        sum[i] = sum[i + 1] + piles[i]
    }
    return helper(1, 0)
}

console.log(stoneGameII([2,7,9,4,4,100]))
