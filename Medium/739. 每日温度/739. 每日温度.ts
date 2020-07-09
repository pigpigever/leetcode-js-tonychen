function dailyTemperatures(T: number[]): number[] {
    const res: number[] = []
    const stack: number[] = []
    for (let i = T.length - 1; i >= 0; i--) {
        while (stack.length && T[stack[0]] <= T[i]) {
            stack.shift()
        }
        if (stack.length) {
            res.unshift(stack[0] - i)
        } else {
            res.unshift(0)
        }
        stack.unshift(i)
    }
    return res
};



// 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。
//
// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
//
// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
