/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
    const helper = (i, j) => {
        const key = `${i}-${j}`
        if (map.has(key)) {
            return map.get(key)
        }
        if (j === t.length) {
            return i === s.length
        }
        let res = false
        if (s[i] === t[j]) {
            res = helper(i + 1, j + 1)
        }
        if (s[i] !== t[j]) {
            res = helper(i, j + 1)
        }
        map.set(key, res)
        return res
    }
    const map = new Map()
    return helper(0, 0)
}

console.log(isSubsequence("abc", "ahbgdc"))
