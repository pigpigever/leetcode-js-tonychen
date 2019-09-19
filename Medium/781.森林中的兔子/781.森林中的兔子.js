/*
 * @lc app=leetcode.cn id=781 lang=javascript
 *
 * [781] 森林中的兔子
 */
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    const rabbit = new Map()
    let ans = 0
    for (const answer of answers) {
        if (!rabbit.has(answer)) {
            rabbit.set(answer, answer)
            ans += answer + 1
        } else {
            rabbit.set(answer, rabbit.get(answer) - 1)
        }
        if (!rabbit.get(answer)) {
            rabbit.delete(answer)
        }
    }
    return ans
};

