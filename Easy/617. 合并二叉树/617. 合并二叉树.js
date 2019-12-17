/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t1 || t2) {
        const tree = new TreeNode()
        dfs(tree, t1, t2)
        return tree
    }
    return null

    function dfs (tree, t1, t2) {
        if (t1 || t2) {
            const first = t1 ? t1.val : 0
            const second = t2 ? t2.val : 0
            const left1 = t1 ? t1.left : null
            const left2 = t2 ? t2.left : null
            const right1 = t1 ? t1.right : null
            const right2 = t2 ? t2.right : null
            tree.val = first + second
            if (left1 || left2) {
                dfs(tree.left = new TreeNode(), left1, left2)
            }
            if (right1 || right2) {
                dfs(tree.right = new TreeNode(), right1, right2)
            }
        }
    }
};