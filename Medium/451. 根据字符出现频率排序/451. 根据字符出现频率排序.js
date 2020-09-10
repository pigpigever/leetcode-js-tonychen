/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function(s) {
    const map = new Map()
    const arr = s.split('')
    for (const str of arr) {
        if (!map.has(str)) {
            map.set(str, 1)
        } else {
            map.set(str, map.get(str) + 1)
        }
    }
    return arr.sort((a, b) => {
        if (map.get(a) === map.get(b)) {
            return b.charCodeAt(0) - a.charCodeAt(0)
        }
        return map.get(b) - map.get(a)
    }).join('')
}

console.log(frequencySort('tree'))

// 输入：
// "loveleetcode"
// 输出：
// "eeeelolovtcd"
// 预期：
// "eeeeoollvtdc"
