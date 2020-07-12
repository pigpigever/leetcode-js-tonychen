/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function(s) {
    const isValid = (val) => {
        if (val < 0 || val > 255 || parseInt(val).toString().length !== val.length) {
            return false
        }
        return true
    }
    const helper = (cnt, currStr, restStr) => {
        if (cnt >= MAX_CNT) {
            if (!restStr && cnt === MAX_CNT) {
                res.push(currStr)
            }
            return
        }
        for (let i = 1; i < MAX_CNT; i++) {
            const curr = restStr.slice(0, i)
            if (!isValid(curr) || i > restStr.length) {
                return
            }
            helper(cnt + 1, currStr ? `${currStr}.${curr}` : curr, restStr.slice(i))
        }
    }
    if (s.length < 4 || s.length > 12) {
        return []
    }
    const res = []
    const MAX_CNT = 4
    helper(0, '', s)
    return res
}

console.log(restoreIpAddresses("25525511135"))
