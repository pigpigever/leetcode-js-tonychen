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
var isSymmetric = function(root) {
    return isTrue(root, root)
    function isTrue (left, right) {
        if (!left && right || !right && left) {
            return false
        }
        if (!left && !right) {
            return true
        }
        if (left.val === right.val) {
            return isTrue(left.left, right.right) && isTrue(right.left, left.right)
        }
        return false
    }
};