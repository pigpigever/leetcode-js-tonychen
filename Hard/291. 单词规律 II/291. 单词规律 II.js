/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPatternMatch = function(pattern, str) {
    /**
     * 判断是否是匹配的单词规律
     * @param index
     * @param str
     * @param forward
     * @param reverse
     * @return {boolean}
     */
    const isMatch = (index, str, forward, reverse) => {
        if (index >= pattern.length) {
            return !str
        }
        for (let i = 1; i <= str.length; i++) {
            // 假设之前已经有这段匹配了
            // 那么先暂存之前建立的双向对应关系
            const currStr = str.slice(0, i)
            const prevPattern = forward.get(pattern[index])
            const prevStr = reverse.get(currStr)
            // 如果跟之前存入的值不匹配就跳过
            if (forward.has(pattern[index]) && prevPattern !== currStr) {
                continue
            }
            if (reverse.has(currStr) && prevStr !== pattern[index]) {
                continue
            }
            // 设置新的值
            // 注意这里判断一个即可（因为它们是关联的）
            if (!forward.has(pattern[index])) {
                forward.set(pattern[index], currStr)
                reverse.set(currStr, pattern[index])
            }
            if (isMatch(index + 1, str.slice(i), forward, reverse)) {
                return true
            }
            // 如果之前的值为空的话现在就可以删
            // 不然涉及到之前的键值匹配问题
            // 删了的话会影响到后面的匹配
            if (!prevPattern) {
                forward.delete(pattern[index])
                reverse.delete(currStr)
            }
        }
        return false
    }
    // 如果都为空说明完全匹配
    if (!pattern && !str) {
        return true
    }
    // 如果其中有一个为空了说明不匹配
    if (!pattern || !str) {
        return false
    }
    return isMatch(0, str, new Map(), new Map())
}
