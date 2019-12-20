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
var isBalanced = function(root) {
    if (!root) {
        return true
    }
    if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right)
    function getHeight (root) {
        if (!root) {
            return 0
        }
        return Math.max(getHeight(root.left), getHeight(root.right)) + 1
    }
};