/*
 * @lc app=leetcode.cn id=430 lang=javascript
 *
 * [430] 扁平化多级双向链表
 */
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    dfs(head)
    function dfs (head) {
        let target = head, pre = null, last = null
        while (target) {
            let next = target.next, child = target.child
            if (child) {
                target.next = child
                child.prev = target
                target.next = child
                last = dfs(child)
                last.next = next
                pre = last
                target.child = null
                if (next) {
                    next.prev = last
                }
            } else {
                pre = target
            }
            target = next
        }
        return pre
    }
    return head
};

