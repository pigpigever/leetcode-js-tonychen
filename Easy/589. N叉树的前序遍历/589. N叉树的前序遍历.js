/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */
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
var preorder = function(root) {
    let ans = []
    dfs(root)
    return ans
    function dfs (root) {
        if (root) {
            ans.push(root.val)
        }
        if (root && root.children) {
            for (let i = 0; i < root.children.length; i++) {
                dfs(root.children[i])
            }
        }
    }
};

