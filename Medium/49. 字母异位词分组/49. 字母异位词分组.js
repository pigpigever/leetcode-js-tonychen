/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const res = []
    const map = new Map()
    for (const str of strs) {
        const key = str.split('').sort((a, b) => a.charCodeAt('a') - b.charCodeAt('b')).join('')
        if (map.has(key)) {
            map.set(key, [...map.get(key), str])
        } else {
            map.set(key, [str])
        }
    }
    for (const [key, val] of map) {
        res.push(val)
    }
    return res
}
