// 示例 1: (From the famous "Die Hard" example)
//
// 输入: x = 3, y = 5, z = 4
// 输出: True

// 5 --> 填满(5)
// 5 --> 3(3)
// 3 --> 倒出(0)
// 5(2) --> 3(2)
// 5(3) --> 填满(5)
// 5(5) --> 3(3), 5(4)


// 示例 2:
//
// 输入: x = 2, y = 6, z = 5
// 输出: False

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
const canMeasureWater = function(x, y, z) {
    // 如果两个水壶的容量加起来比 z 小
    // 那么不可能凑出 z 升水
    if (x + y < z) {
        return false
    }

}
