const repeatedSubstringPattern = function(s: string): boolean {
    const N = s.length
    const mid: number = Math.floor(N / 2) + N % 2
    return s.substring(0, mid) === s.substring(mid)
};
