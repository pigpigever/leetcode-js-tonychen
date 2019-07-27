/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    let ans = []
    dfs(root)
    return ans
    function dfs (root) {
        if (root && root.children) {
            for (let i = 0; i < root.children.length; i++) {
                dfs(root.children[i])
            }
        }
        if (root) {
            ans.push(root.val)
        }
    }
};