//
// 有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。
// 注意，不是必须有这些素因子，而是必须不包含其他的素因子。
// 例如，前几个数按顺序应该是 1，3，5，7，9，15，21，25，27，。
//
// 示例 1:
//
// 输入: k = 5
//
// 输出: 9

/**
 * @param {number} k
 * @return {number}
 */
const getKthMagicNumber = function (k) {
    const res = [1]
    let p3 = 0
    let p5 = 0
    let p7 = 0
    for (let i = 1; i < k; i++) {
        res[i] = Math.min(res[p3] * 3, Math.min(res[p5] * 5, res[p7] * 7))
        if (res[i] === res[p3] * 3) {
            p3++
        }
        if (res[i] === res[p5] * 5) {
            p5++
        }
        if (res[i] === res[p7] * 7) {
            p7++
        }
    }
    return res[k - 1]
}

getKthMagicNumber(10)
