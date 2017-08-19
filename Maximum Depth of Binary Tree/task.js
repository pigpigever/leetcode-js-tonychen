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
var maxDepth = function(root) {
    if(root==null)return 0;
    var result=[],a=0;
    result.unshift(root);
    while(result.length>0)
    {
        var n=result.length;
        a++;
        for(var i=0;i<n;i++){
            var b=result[0];
            result.shift();
            if(b.left!=null){
                result.push(b.left);
            }
            if(b.right!=null){
                result.push(b.right);
            }
        }
    }
    return a;
};