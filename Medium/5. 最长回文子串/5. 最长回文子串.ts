/**
 * 计算最长回文子串
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s: string): string {
    let res: string = ''
    for (let i = 0; i < s.length; i++) {
        let left: number = Math.floor(i / 2)
        let right: number = left + i % 2
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        let currStr: string = s.slice(left + 1, right)
        res = res.length > currStr.length ? res : currStr
    }
    return res
};
