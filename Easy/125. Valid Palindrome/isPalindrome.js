/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^\dA-Za-z]+/g, '').toLocaleLowerCase()
    let i = 0, j = str.length - 1

    while (i < j) {
        if (str.charAt(i) !== str.charAt(j)) {
            return false
        }
        i++, j--
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("race a car"))

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false