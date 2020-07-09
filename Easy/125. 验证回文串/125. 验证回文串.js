/**
 /**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const reg = /[a-zA-Z\d]/
    let left = 0
    let right = s.length - 1
    while (left < right) {
        while (left < right && !reg.test(s.charAt(left))) {
            left++
        }
        while (left < right && !reg.test(s.charAt(right))) {
            right--
        }
        if (left < right) {
            if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) {
                return false
            }
        }
        left++
        right--
    }
    return true
}
