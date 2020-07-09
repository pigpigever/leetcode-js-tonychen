var buildArray = function(target: number[], n: number): string[] {
    const res: string [] = []
    let i: number = 0
    let j: number = 1
    for (; i < target.length; i++) {
        if (target[i] === j) {
            res.push('Push')
        } else {
            while (j < target[i]) {
                res.push('Push')
                res.push('Pop')
                j++
            }
            res.push('Push')
        }
        j++
    }
    return res
};
