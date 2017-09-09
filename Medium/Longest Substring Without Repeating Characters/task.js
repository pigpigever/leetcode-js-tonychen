/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0,
        hashMap = new Set()
    for (let i = 0; i < s.length; i++) {
        let counter = 0
        hashMap.clear()
        for (let j = i; j < s.length; j++) {
            counter++
            hashMap.add(s[j])
            if (counter !== hashMap.size || j + 1 === s.length) {
                max = max > hashMap.size ? max : hashMap.size
                break
            }
        }
    }
    return max
};