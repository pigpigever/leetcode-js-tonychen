/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let ans = [0,0,1,2,4,6,9], tmp = [4,6,9], base = 3
    for (let i = 7; i <= n;) {
        let j = 0
        while (j < tmp.length && i <= n) {
            ans[i++] = base * tmp[j++]
        }
        base *= 3
    }
    return ans[n]
};

console.log(integerBreak(10))