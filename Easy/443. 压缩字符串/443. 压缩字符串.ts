const compress = function(chars: string[]): number {
    const N: number = chars.length
    let res: number = 0
    let start: number = 0
    let j: number = 0
    for (let i = 0; i < N; i++) {
        if (chars[i] !== chars[i + 1]) {
            // cnt个相同的字符
            const cnt: number = i - start + 1
            let str: string = cnt > 1 ? cnt.toString() : ''
            res += str.length + 1
            chars[j++] = chars[i]
            for (let k = 0; k < str.length; k++) {
                chars[j++] = str[k]
            }
            start = i + 1
        }
    }
    return res
};
