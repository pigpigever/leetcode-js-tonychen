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
var isValidBST = function(root) {
    return helper(root, null, null)
    function helper (root, min, max) {
        if (!root) {
            return true
        }
        const val = root.val
        if (min && val <= min) {
            return false
        }
        if (max && val >= max) {
            return false
        }
        return helper(root.left, min, val) && helper(root.right, val, max)
    }
};