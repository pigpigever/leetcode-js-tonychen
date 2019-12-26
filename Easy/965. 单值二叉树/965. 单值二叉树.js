/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    const dfs = (root, preVal) => {
        if (!root) {
            return true
        }
        if (preVal === null) {
            preVal = root.val
        }
        if (root.val !== preVal) {
            return false
        }
        return dfs(root.left, root.val) && dfs(root.right, root.val)
    }
    return dfs(root, null)
};