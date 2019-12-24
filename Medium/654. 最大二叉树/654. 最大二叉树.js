/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    const dfs = (start, end) => {
        let max = nums[start], tag = start
        for (let i = start + 1; i <= end; i++) {
            if (nums[i] > max) {
                max = nums[i]
                tag = i
            }
        }
        const root = new TreeNode(max)
        if (start < nums.length && tag - 1 >= 0 && start <= tag - 1) {
            root.left = dfs(start, tag - 1)
        }
        if (tag + 1 < nums.length && end >= 0 && tag + 1 <= end) {
            root.right = dfs(tag + 1, end)
        }
        return root
    }
    return dfs(0, nums.length - 1)
};