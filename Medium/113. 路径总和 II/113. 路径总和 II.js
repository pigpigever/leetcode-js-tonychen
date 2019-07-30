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
            let left = root.left, right = root.right
            if (left) {
                tmp.push(left.val)
                dfs(left, left.val + ans, tmp)
            }
            if (right) {
                tmp.push(right.val)
                dfs(right, right.val + ans, tmp)
            }
            tmp.pop()
        }
    }
};