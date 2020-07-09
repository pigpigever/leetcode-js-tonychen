const isAlienSorted = function(words: string[], order: string): boolean {
    const map: Map<string, number> = new Map()
    for (let i = 0; i < order.length; i++) {
        map.set(order[i], i)
    }
    for (let i = 0; i < words.length - 1; i++) {
        let flag = false
        for (let j = 0; j < words[i].length; j++) {
            const first = map.get(words[i][j])
            const second = map.get(words[i + 1][j])
            if (first !== second) {
                if (first !== undefined && second !== undefined) {
                    if (first > second) {
                        return false
                    } else {
                        flag = true
                        break
                    }
                }
            }
        }
        if (!flag && words[i].length > words[i + 1].length) {
            return false
        }
    }
    return true
};

