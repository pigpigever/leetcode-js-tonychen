function topKFrequent(nums: number[], k: number): number[] {
    const res: number[] = []
    const map: Map<number, number> = new Map()
    const freqMap: Map<number, number[]> = new Map()
    let max: number = 0
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        } else {
            map.set(nums[i], <number>map.get(nums[i]) + 1)
        }
    }
    for (const [key, frequent] of map) {
        const curr: number[] = freqMap.get(frequent) || []
        max = Math.max(frequent, max)
        freqMap.set(frequent, [...curr, key])
    }
    while (k > 0) {
        while (max) {
            if (freqMap.has(max)) {
                const curr: number[] = <number[]>freqMap.get(max)
                let i = 0
                while (k > 0 && i < curr.length) {
                    res.push(curr[i++])
                    k--
                }
            }
            max--
        }
    }
    return res
}
