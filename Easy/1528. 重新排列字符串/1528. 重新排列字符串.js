/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {
    const res = []
    for (let i = 0; i < s.length; i++) {
        res[indices[i]] = s.charAt(i)
    }
    return res.join('')
}
