/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let result = [], temp = [], average, counter;
    result.push(root.val);
    temp.push(root);
    while (temp.length > 0) {
        let i = temp.length, length = 0, average = 0
        while (i--) {
            if (temp[0].left !== null) {
                average += temp[0].left.val;
                temp.push(temp[0].left);
                length++;
            }
            if (temp[0].right !== null) {
                average += temp[0].right.val;
                temp.push(temp[0].right);
                length++;
            }
            temp.shift();
        }
        Number.isNaN(average / length) ? 0 : result.push(average / length);
    }
    return result;
};