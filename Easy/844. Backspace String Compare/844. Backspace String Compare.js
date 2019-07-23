/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i = 0, j = 0, sAns = [], tAns = []
    while (i < s.length || j < t.length) {
        if (s.charAt(i) === '#') {
            sAns.pop()
        } else {
            sAns.push(s.charAt(i))
        }
        if (t.charAt(j) === '#') {
            tAns.pop()
        } else {
            tAns.push(t.charAt(j))
        }
        i++, j++
    }
    return sAns.join('') === tAns.join('')
};
console.log(backspaceCompare("xywrrmp", "xywrrmu#p"))

// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

//  

// 示例 1：

// 输入：S = "ab#c", T = "ad#c"
// 输出：true
// 解释：S 和 T 都会变成 “ac”。
// 示例 2：

// 输入：S = "ab##", T = "c#d#"
// 输出：true
// 解释：S 和 T 都会变成 “”。
// 示例 3：

// 输入：S = "a##c", T = "#a#c"
// 输出：true
// 解释：S 和 T 都会变成 “c”。
// 示例 4：

// 输入：S = "a#c", T = "b"
// 输出：false
// 解释：S 会变成 “c”，但 T 仍然是 “b”。