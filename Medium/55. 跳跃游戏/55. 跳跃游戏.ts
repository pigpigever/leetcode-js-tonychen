const canJump = function(nums: number[]): boolean {
    const helper = (curr: number): boolean => {
        // 如果 curr >= nums.length - 1
        // 说明已经跳到了最后一个位置
        if (curr >= nums.length - 1) {
            return true
        }
        // 如果 curr 已经在 map 中记录过
        // 说明之前跳过这个位置而且没有成功达到最后一个位置
        if (map.has(curr)) {
            return false
        }
        // 至少跳一步，从 1步到 nums[curr] 步开始尝试
        for (let i = 1; i <= nums[curr]; i++) {
            if (helper(curr + i)) {
                return true
            }
        }
        // 到这里说明没能跳到最后一个位置
        map.set(curr, false)
        return false
    }
    const map: Map<number, any> = new Map()
    return helper(0)
};
