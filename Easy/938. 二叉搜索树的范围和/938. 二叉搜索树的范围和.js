/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    const dfs = (root, L, R) => {
        if (!root) {
            return
        }
        const val = root.val
        if (val >= L && val <= R) {
            res += val
        }
        if (L < val) {
            dfs(root.left, L, R)
        }
        if (R > val) {
            dfs(root.right, L, R)
        }
    }
    let res = 0
    dfs(root, L, R)
    return res
};