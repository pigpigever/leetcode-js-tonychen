/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let target = 0, k = 0, flag = 0, j = 0

    while (flag < needle.length && k <= haystack.length) {
        for (let i = 0; i < needle.length; i++) {
            if (haystack[k] !== needle[i]) {
                flag = 0
                k = j++
                target = -1
                break
            }
            if (flag === 0) {
                target = k
            }
            k++
            flag++
        }
    }
    return target
}

console.log(strStr("d", "d"))