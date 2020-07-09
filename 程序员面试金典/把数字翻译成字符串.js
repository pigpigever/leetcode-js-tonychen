/**
 * @param {number} num
 * @return {number}
 */
const translateNum = function(num) {
    const helper = (index) => {
        if (index === str.length) {
            cnt++
            return
        }
        for (let i = 1; i <= 2; i++) {
            const curr = str.slice(index, index + i)
            if (!curr || curr.length === 2 && curr[0] == 0) {
                continue
            }
            if (curr >= 0 && curr <= 25) {
                helper(index + i)
            }
        }
    }
    const str = num.toString()
    let cnt = 0
    helper(0)
    return cnt
};

console.log(translateNum(220))

// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
// 一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
//
// 示例 1:
//
// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

// 12258
// 1 2 2 5 8
// 12 2 5 8
// 1 22 5 8
// 1 2 25 8
