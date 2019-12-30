/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map()
    for (const num of arr) {
        const val = map.get(num)
        map.set(num, val ? val + 1 : 1)
    }
    const countMap = new Map()
    for (let [key, val] of map) {
        const hasVal = countMap.get(val)
        if (hasVal) {
            return false
        } else {
            countMap.set(val, true)
        }
    }
    return true
};