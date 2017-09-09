/**
 * @param {string} s
 * @return {number}
 */
//解法1
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
//解法2
function lengthOfLongestSubstring(s) {
    const map = {};
    var left = 0;

    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        console.log(`map[${v}]:${map[v]}`)
        map[v] = i;
        console.log(`map[${v}]:${map[v]},left:${left},max:${Math.max(max, i - left + 1)}`)
        return Math.max(max, i - left + 1);
    }, 0);
}

console.log(lengthOfLongestSubstring("abcaaacb"))