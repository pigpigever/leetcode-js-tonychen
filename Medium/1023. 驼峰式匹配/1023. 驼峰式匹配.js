/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
const camelMatch = function(queries, pattern) {
    const isLowerCase = (str) => str.toLowerCase() === str
    const isMatch = (query, map, i, j) => {
        if (i === query.length) {
            return j === pattern.length
        }
        const key = `${i}-${j}`
        if (map.has(key)) {
            return map.get(key)
        }
        let res = false
        if (query[i] === pattern[j]) {
            res = isMatch(query, map, i + 1, j + 1)
        }
        if (!res && isLowerCase(query[i])) {
            res = isMatch(query, map, i + 1, j)
        }
        map.set(key, res)
        return res
    }
    const res = []
    for (const query of queries) {
        res.push(isMatch(query, new Map(), 0, 0))
    }
    return res
}
