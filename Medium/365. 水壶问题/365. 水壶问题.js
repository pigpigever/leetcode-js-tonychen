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
    const map = new Map()
    const stack = [[0, 0]]
    while (stack.length) {
        const [first, second] = stack.pop()
        const key = `${first}-${second}`
        if (first === z || second === z || first + second === z) {
            return true
        }
        if (map.has(key)) {
            continue
        }
        map.set(key, true)
        stack.push([x, second])
        stack.push([first, y])
        stack.push([0, second])
        stack.push([first, 0])
        stack.push([first - Math.min(first, y - second), second + Math.min(first, y - second)])
        stack.push([first + Math.min(second, x - first), second - Math.min(second, x - first)])
    }
    return false
}

console.log(canMeasureWater(3, 5, 4))
console.log(canMeasureWater(2, 6, 5))
console.log(canMeasureWater(22003, 31237, 1))
console.log(canMeasureWater(104579, 104593, 12444))
