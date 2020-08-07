/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function(n) {
    /**
     * 计算不同的二叉搜索树的种数
     * @param {number} start
     * @param {number} end
     * @return {number}
     */
    const helper = (start, end) => {
        const key = `${start}-${end}`
        if (map.has(key)) {
            return map.get(key)
        }
        if (start >= end) {
            return 1
        }
        let res = 0
        for (let i = start; i <= end; i++) {
            const left = helper(start, i - 1)
            const right = helper(i + 1, end)
            res += left * right
        }
        map.set(key, res)
        return res
    }
    const map = new Map()
    return helper(1, n)
}

