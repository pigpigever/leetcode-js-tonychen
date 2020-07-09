/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    /**
     * 计算数位和
     * @param {number} num 
     */
    const sum = (num) => {
        let res = 0
        while (num) {
            res += num % 10
            num = Math.floor(num / 10)
        }
        return res
    }
    /**
     * 递归找机器人的运动范围
     * @param {number} i 
     * @param {number} j 
     */
    const helper = (i, j) => {
        // 如果超出边界范围或者坐标的数位和大于 k
        // 则结束递归，直接 return 0
        if (i >= m || i < 0 || j >= n || j < 0 || sum(i) + sum(j) > k) {
            return 0
        }
        // 如果被访问过就直接返回 0，因为之前已经被计算进去过
        if (visited[i][j]) {
            return 0
        }
        // 标记一下当前格子
        visited[i][j] = true
        // 往其他四个方向找一下
        return helper(i - 1, j) + helper(i + 1, j) + helper(i, j - 1) + helper(i, j + 1) + 1
    }
    // 标记格子是否被访问过
    // 这里做初始化
    let visited = new Array(m).fill(false).map(() => new Array(n).fill(false))
    return helper(0, 0)
};

// console.log(movingCount(2, 3, 1))
// console.log(movingCount(3, 1, 0))
console.log(movingCount(16, 8, 4))