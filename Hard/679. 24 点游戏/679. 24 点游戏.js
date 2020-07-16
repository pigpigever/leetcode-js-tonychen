// 你有 4 张写有 1 到 9 数字的牌。你需要判断是否能通过 *，/，+，-，(，) 的运算得到 24。
//
// 示例 1:
//
// 输入: [4, 1, 8, 7]
// 输出: True
// 解释: (8-4) * (7-1) = 24
// 示例 2:
//
// 输入: [1, 2, 1, 2]
// 输出: False
// 注意:
//
// 除法运算符 / 表示实数除法，而不是整数除法。例如 4 / (1 - 2/3) = 12 。
// 每个运算符对两个数进行运算。特别是我们不能用 - 作为一元运算符。例如，[1, 1, 1, 1] 作为输入时，表达式 -1 - 1 - 1 - 1 是不允许的。
// 你不能将数字连接在一起。例如，输入为 [1, 2, 1, 2] 时，不能写成 12 + 12 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const judgePoint24 = function(nums) {
    /**
     * @param {number} prev
     * @param {number} index
     * @return {Array}
     */
    const helper = (prev, index) => {
        if (index === nums.length) {
            return [prev]
        }
        let res = []
        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) {
                continue
            }
            const temp = []
            visited[i] = true
            temp[0] = helper(nums[i], index + 1)
            temp[1] = helper(prev + nums[i], index + 1)
            temp[2] = helper(nums[i], index + 1)
            temp[3] = helper(prev - nums[i], index + 1)
            temp[4] = helper(nums[i], index + 1)
            temp[5] = helper(prev * nums[i], index + 1)
            temp[6] = helper(nums[i], index + 1)
            temp[7] = helper(prev / nums[i], index + 1)
            visited[i] = false
            for (let j = 0; j < temp.length; j++) {
                for (let k = 0; k < temp[j].length; k++) {
                    switch (j) {
                        case 0:
                            temp[0][k] = prev + temp[0][k]
                            break
                        case 2:
                            temp[2][k] = prev - temp[2][k]
                            break
                        case 4:
                            temp[4][k] = prev * temp[4][k]
                            break
                        case 6:
                            temp[6][k] = prev / temp[6][k]
                            break
                        default:
                            break
                    }
                }
                res.push(...temp[j])
            }
        }
        return res
    }
    const visited = new Array(nums.length).fill(false)
    for (let i = 0; i < nums.length; i++) {
        visited[i] = true
        const res = helper(nums[i], 1)
        if (res.some((num) => Math.abs(24 - num) < 1e-6)) {
            return true
        }
        visited[i] = false
    }
    return false
}

// console.log(judgePoint24([4, 1, 8, 7]))
// console.log(judgePoint24([1, 2, 1, 2]))
// console.log(judgePoint24([1, 8, 2, 5]))
// console.log(judgePoint24([1,9,1,2]))
// console.log(judgePoint24([3,9,7,7]))
// console.log(judgePoint24([1,5,5,5]))
// console.log(judgePoint24([7, 7, 8, 9]))
console.log(judgePoint24([3,3,8,8]))
console.log(judgePoint24([3,4,6,7]))

// 1:  8 / (3 - 8 / 3)
// 2:  8 / (3 - (8 / 3))
