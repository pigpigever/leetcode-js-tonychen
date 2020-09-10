// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
// 假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，
// 序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。
// 示例 1：
//
// 输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// 输出：true
// 解释：我们可以按以下顺序执行：
// push(1), push(2), push(3), push(4), pop() -> 4,
// push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
// 示例 2：
//
// 输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// 输出：false
// 解释：1 不能在 2 之前弹出。

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function(pushed, popped) {
    if (!pushed.length && !popped.length) {
        return true
    }
    if (!pushed.length || !popped.length || pushed.length !== popped.length) {
        return false
    }
    const stack = [pushed[0]]
    let i = 1
    while (stack.length) {
        while (stack.length && stack[0] === popped[0]) {
            stack.shift()
            popped.shift()
        }
        if (i < pushed.length) {
            stack.unshift(pushed[i++])
        } else if (stack.length) {
            return false
        }
    }
    return true
}

console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]))
console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2]))
console.log(validateStackSequences([2,1,0],[1,2,0]))
