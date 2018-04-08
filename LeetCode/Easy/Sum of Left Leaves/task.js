/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let queue = [],sum = 0
    queue.push(root)
    while(queue.length && root !== null){
        let i = queue.length
        while(i--){
            if(queue[0].left !== null){
                if(queue[0].left.left == null && queue[0].left.right === null){
                    sum += queue[0].left.val   
                }
                queue.push(queue[0].left)
            }
            if(queue[0].right !== null){
                queue.push(queue[0].right)
            }
            queue.shift()
        }
    }
    return sum
};