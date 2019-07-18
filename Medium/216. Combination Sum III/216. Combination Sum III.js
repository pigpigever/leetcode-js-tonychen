/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = []
    dfs(1, [], 0)
    return result
    function dfs (index, tmp, sum) {
        if (index === k + 1) {
            if (sum === n) {
                result.push(tmp.slice())
            }
            return
        }
        for (let i = index; i <= 9; i++) {
            if (i <= tmp[tmp.length - 1]) continue
            tmp.push(i)
            dfs(index + 1, tmp, sum + i)
            tmp.pop()
        }
    }
};

console.log(combinationSum3(3, 9))