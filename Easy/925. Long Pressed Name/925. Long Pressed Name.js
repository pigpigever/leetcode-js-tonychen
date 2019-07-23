/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let i = 0, j = 0, countName = 0, countTyped = 0
    while (i < name.length) {
        while (name.charAt(i) === name.charAt(i - 1)) {
            countName++
            i++
        }
        while (typed.charAt(j) === typed.charAt(j - 1)) {
            countTyped++
            j++
        }
        if (countName > countTyped || name.charAt(i - 1) !== typed.charAt(j - 1)) {
            return false
        }
        countName = 0
        countTyped = 0
        i++, j++
    }
    return name.charAt(i - 1) === typed.charAt(j - 1)
};