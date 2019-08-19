/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let i = 1, j = 1, k = 1
    let ans = [0, 1]
    for (let h = 1; h <= n; h++) {
        let tmp = Math.min(2 * ans[i], Math.min(3 * ans[j], 5 * ans[k]))
        ans.push(tmp)
        if (tmp === 2 * ans[i]) i++
        if (tmp === 3 * ans[j]) j++
        if (tmp === 5 * ans[k]) k++
    }
    return ans[n]
};