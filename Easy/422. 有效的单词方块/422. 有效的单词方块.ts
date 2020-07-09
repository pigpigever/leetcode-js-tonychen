var validWordSquare = function(words: string[]): boolean {
    for (let i = 0; i < words.length; i++) {
        let str: string = ''
        for (let j = 0; j < words.length; j++) {
            if (words[j][i]) {
                str += words[j][i]
            }
        }
        if (words[i] !== str) {
            return false
        }
    }
    return true
};
