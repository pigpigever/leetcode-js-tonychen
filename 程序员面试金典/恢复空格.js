// 输入：
// dictionary = ["looked","just","like","her","brother"]
// sentence = "jesslookedjustliketimherbrother"
// 输出： 7
// 解释： 断句后为"jess looked just like tim her brother"，共7个未识别字符。

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
const respace = function(dictionary, sentence) {
    const helper = (index, sentence) => {
        if (map.has(sentence)) {
            return
        }
        if (index === dictionary.length) {
            res = Math.min(res, sentence.length)
            map.set(sentence, res)
            visited = new Array(dictionary.length).fill(false)
            return
        }
        for (let i = 0; i < dictionary.length; i++) {
            if (visited[i]) {
                continue
            }
            const next = sentence.replace(new RegExp(`${dictionary[i]}`, 'g'), '')
            visited[i] = true
            helper(index + 1, next)
        }
    }
    let visited = new Array(dictionary.length).fill(false)
    const map = new Map()
    let res = Infinity
    helper(0, sentence)
    return res
};

// console.log(respace(["looked","just","like","her","brother"], "jesslookedjustliketimherbrother"))
// console.log(respace(["patk","mk","bgmuaukzpbp","tpakjawagaakakmpkkikjpbmppiiazkkdko","apoggddaakoadudmw","mugaxmgwkbptxmbmt","tijagbkixiwzdddbbjjgpk","goaotk","kk","xambkwpozgouaaamzgtpkojgdbxuwkjz","gmwo","bkbpdptkjxjgatdkukxmxkabkjmiuotiikb","ad","babtgmz","kujuak","ikimadpozaxozoaikttzamjakk","jjumibouto"], "bgmuaukzpbpkujuakpatk"))
// console.log(respace(["sssjjs","hschjf","hhh","fhjchfcfshhfjhs","sfh","jsf","cjschjfscscscsfjcjfcfcfh","hccccjjfchcffjjshccsjscsc","chcfjcsshjj","jh","h","f","s","jcshs","jfjssjhsscfc"], "sssjjssfshscfjjshsjjsjchffffs"))

console.log(respace(["vprkj","sqvuzjz","ptkrqrkussszzprkqrjrtzzvrkrrrskkrrursqdqpp","spqzqtrqs","rkktkruzsjkrzqq","rk","k","zkvdzqrzpkrukdqrqjzkrqrzzkkrr","pzpstvqzrzprqkkkd","jvutvjtktqvvdkzujkq","r","pspkr","tdkkktdsrkzpzpuzvszzzzdjj","zk","pqkjkzpvdpktzskdkvzjkkj","sr","zqjkzksvkvvrsjrjkkjkztrpuzrqrqvvpkutqkrrqpzu"], "rkktkruzsjkrzqqzkvdzqrzpkrukdqrqjzkrqrzzkkrr"))
