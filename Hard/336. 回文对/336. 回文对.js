/**
 * @param {string[]} words
 * @return {number[][]}
 */
const palindromePairs = function(words) {
    // a a
    // ab ba
    // abac c
    // caba c
    const isPalindrome = (str) => {
        return str.split('').reverse().join('') === str
    }
    const getFlipWord = (str) => {
        return str.split('').reverse().join('')
    }
    const map = new Map()
    const res = []
    for (let i = 0; i < words.length; i++) {
        map.set(words[i], i)
    }
    for (let i = 0; i < words.length; i++) {
        const flipWord = getFlipWord(words[i])
        const firstWord = words[i][0]
        const lastWord = words[i][words[i].length - 1]
        if (isPalindrome(words[i])) {
            if (map.has('')) {
                res.push([i, map.get('')])
            }
        }
        if (map.has(flipWord)) {
            res.push([i, map.get(flipWord)])
            res.push([map.get(flipWord), i])
        }
        if (map.has(firstWord) && isPalindrome(words[i] + firstWord)) {
            res.push([i, map.get(firstWord)])
        }
        if (map.has(lastWord) && isPalindrome(lastWord + words[i])) {
            res.push([map.get(lastWord), i])
        }
    }
    return res
}
