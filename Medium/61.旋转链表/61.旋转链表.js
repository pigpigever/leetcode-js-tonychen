/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let target = head, last = null, len = 1
    while (target && target.next) {
        target = target.next
        len++
    }
    last = target
    target = head
    if (k % len === 0) {
        return head
    }
    let diff = len - (k % len)
    let pre = null
    while (target && diff--) {
        pre = target
        target = target.next
    }
    pre.next = null
    last.next = head
    return target
};
