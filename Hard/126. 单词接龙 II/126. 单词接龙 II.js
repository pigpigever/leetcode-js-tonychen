const findLadders = function(beginWord, endWord, wordList) {
    /**
     * 判断值是否合法
     * @param {string}  curr
     * @param {string} next
     * @return {boolean}
     */
    const isValid = (curr, next) => {
        let flag = 0
        for (let i = 0; i < curr.length; i++) {
            if (curr[i] !== next[i]) {
                flag++
            }
            if (flag > 1) {
                return false
            }
        }
        return true
    }
    /**
     * 生成路径
     * @param {string} beginWord
     * @param {string} path
     * @param {number} currLevel
     */
    const helper = (beginWord, path, currLevel) => {
        if (currLevel > minLevel) {
            return
        }
        if (beginWord === endWord) {
            res.push(path)
            return
        }
        const children = visited.get(beginWord)
        if (!children || !children.length) {
            return
        }
        for (let i = 0; i < children.length; i++) {
            helper(children[i], [...path, children[i]], currLevel + 1)
        }
    }
    const N = wordList.length
    const map = new Map()
    const visited = new Map()
    const queue = [beginWord]
    const res = []
    let flag = false
    let minLevel = 1
    map.set(beginWord, true)
    while (queue.length) {
        let loop = queue.length
        let prevChildren = []
        while (loop--) {
            const key = queue.shift()
            const children = []
            for (let i = 0; i < N; i++) {
                if (map.has(wordList[i])) {
                    continue
                }
                if (isValid(key, wordList[i])) {
                    // 如果之前将 wordList[i] 存入 visited
                    // 那就判断下 childrenKeys 中是否包含了 key
                    // 避免 key 和 childrenKeys 循环引用
                    const childrenKeys = visited.get(wordList[i])
                    if (!childrenKeys || childrenKeys.indexOf(key) === -1) {
                        children.push(wordList[i])
                    }
                    if (wordList[i] === endWord) {
                        flag = true
                    }
                    queue.push(wordList[i])
                }
            }
            prevChildren = prevChildren.concat(children)
            visited.set(key, children)
        }
        for (let i = 0; i < prevChildren.length; i++) {
            map.set(prevChildren[i], true)
        }
        minLevel++
        if (flag) {
            break
        }
    }
    if (!flag) {
        return []
    }
    helper(beginWord, [beginWord], 1)
    return res
};
