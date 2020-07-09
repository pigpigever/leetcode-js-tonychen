function climbStairs(n: number): number {
    if (n <= 2) {
        return n
    }
    let prev: number = 1
    let curr: number = 2
    for (let i = 3; i <= n; i++) {
        const temp: number = curr
        curr += prev
        prev = temp
    }
    return curr
};
