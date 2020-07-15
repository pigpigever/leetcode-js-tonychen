// 给定一组单词words，编写一个程序，找出其中的最长单词，且该单词由这组单词中的其他单词组合而成。
// 若有多个长度相同的结果，返回其中字典序最小的一项，若没有符合要求的单词则返回空字符串。

// 示例：

// 输入： ["cat","banana","dog","nana","walk","walker","dogwalker"]
// 输出： "dogwalker"
// 解释： "dogwalker"可由"dog"和"walker"组成。
// 提示：

// 0 <= len(words) <= 100
// 1 <= len(words[i]) <= 100

/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = function(words) {
    /**
     * 判断是否是组合数
     * @param {string}} word 
     * @param {number} index 
     */
    const isComposeWord = (word, index, visited) => {
        if (!word) {
            return true
        }
        for (let i = 1; i <= word.length; i++) {
            const left = word.substring(0, i)
            const right = word.substring(i)
            // 如果是原 word，那分出来的不能跟它相等
            if (index === 0 && (left === word || right === word)) {
                continue
            }
            // 组合词的构成条件
            if (map.has(left) && isComposeWord(right, index + 1)) {
                return true
            }
        }
        return false
    }
    let res = ''
    const map = new Map()
    // 遍历一遍，把 word 都存进 map
    words.forEach((word) => {
        map.set(word, true)
    })
    words.forEach((word) => {
        if (isComposeWord(word, 0)) {
            // 优先取长度最大的单词
            // 如果长度相等就取字典序最小的单词
            if (res.length < word.length || (res.length === word.length && res > word)) {
                res = word
            }
        }  
    })
    return res
}

console.log(longestWord(["cat","banana","dog","nana","walk","walker","dogwalker"]))
console.log(longestWord(["mbzznzbccc","zbmcbbcbze","cbz","cbzcbz"]))


