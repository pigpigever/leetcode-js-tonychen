/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    return checkSameTree(p, q)

    function checkSameTree (p, q) {
        if (!p && !q) {
            return true
        }
        if (!p && q || p && !q) {
            return false
        }
        if (p.val === q.val) {
            return checkSameTree(p.left, q.left) && checkSameTree(p.right, q.right)
        }
        return false
    }
};
