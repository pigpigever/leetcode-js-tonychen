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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let res = []
    if (root) {
        dfs(root, root.val, [root.val])
    }
    return res
    function dfs (root, ans, tmp) {
        if (ans === sum) {
            if (root && !root.left && !root.right) {
                res.push(tmp.slice())
            }
        }
        if (root) {
            if (root.left) {
                tmp.push(root.left.val)
                dfs(root.left, root.left.val + ans, tmp)
            }
            if (root.right) {
                tmp.push(root.right.val)
                dfs(root.right, root.right.val + ans, tmp)
            }
            tmp.pop()
        }
    }
};