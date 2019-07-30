/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) {
        return false
    }
    return dfs(root, root.val)
    function dfs (root, ans) {
        if (ans === sum) {
            if (root && !root.left && !root.right) {
                return true
            }
        }
        if (root) {
            let left, right
            if (root.left) {
                left =  dfs(root.left, ans + root.left.val) 
            }
            if (root.right) {
                right = dfs(root.right, ans + root.right.val)
            }
            return !!left || !!right
        }
    }
};