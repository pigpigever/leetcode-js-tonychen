const ladderLength = function(beginWord: string, endWord: string, wordList: string[]): number {
    const isValid = (curr: string, next: string): boolean => {
        let flag: number = 0
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
    const N: number = wordList.length
    const map: Map<string, any> = new Map()
    const queue: string[] = [beginWord]
    let res: number = 1
    map.set(beginWord, true)
    while (queue.length) {
        let length = queue.length
        while (length--) {
            const keyword = queue.shift()
            for (let i = 0; i < N; i++) {
                if (map.has(wordList[i])) {
                    continue
                }
                if (isValid(<string>keyword, wordList[i])) {
                    if (wordList[i] === endWord) {
                        return res + 1
                    }
                    queue.push(wordList[i])
                    map.set(wordList[i], true)
                }
            }
        }
        res++
    }
    return 0
};
