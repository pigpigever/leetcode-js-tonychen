/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */

var tree2str = function (t) {
    let result = '',
        stack = [];
    stack.push(t);
    while (stack.length) {
        let i = stack.length;
        while (i--) {
            let output = stack.shift();
            console.log(output);
            if (output.left !== null) {
                stack.push(output.left);
            }
            if (output.right !== null) {
                stack.push(output.right);
            }
        }
    }
    return result
};