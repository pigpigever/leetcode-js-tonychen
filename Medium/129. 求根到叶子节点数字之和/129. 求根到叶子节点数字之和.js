/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode}
 * @return {number}
 */
var sumNumbers = function(root) {
    const dfs = (root, cur) => {
        if (!root) {
            return 0
        }
        cur = cur * 10 + root.val
        if (!root.left && !root.right) {
            return cur
        }
        return dfs(root.left, cur) + dfs(root.right, cur)
    }
    return dfs(root, 0)
};