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
var sortedArrayToBST = function(nums) {
    if (!nums.length) {
        return null
    }
    const dfs = (start, end) => {
        if (start > end) {
            return null
        }
        const mid = Math.ceil((start + end) / 2)
        const root = new TreeNode(nums[mid])
        root.left = dfs(start, mid - 1)
        root.right = dfs(mid + 1, end)
        return root
    }
    return dfs(0, nums.length - 1)
};