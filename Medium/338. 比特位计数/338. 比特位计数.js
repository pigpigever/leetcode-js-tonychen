/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let ans = [0, 1], pre = 2, cur = 3
    if (num === 0) {
        return [0]
    }
    while (cur <= num) {
        ans.push(...ans.map((item) => item + 1))
        pre = cur + 1
        cur = pre * 2 - 1
    }
    if (cur > num) {
        ans.push(...ans.slice(0, pre - cur + num).map((item) => item + 1))
    }
    return ans
};