/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
const validWordAbbreviation = function(word, abbr) {
    const helper = (i, j) => {
        if (j === abbr.length) {
            return i === word.length
        }
        if (word[i] === abbr[j]) {
            return helper(i + 1, j + 1)
        }
        let temp = ''
        while (j < abbr.length && /\d/.test(abbr[j])) {
            temp += abbr[j]
            j++
        }
        if (temp && temp[0] != 0) {
            return helper(i + parseInt(temp), j)
        }
        return false
    }
    return helper(0, 0)
}
