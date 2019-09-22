/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let start = head, end = head, first = new ListNode(), pre = first, next
    first.next = head
    while (start && --m && --n) {
        pre = start
        start = start.next
        end = end.next
    }
    while (end && --n) {
        end = end.next
    }
    next = end.next
    reverse()
    pre.next = start
    if (end) {
        end.next = next
    }
    return first.next

    function reverse () {
        let curr = start.next, pre = start, last = end.next
        while (curr !== last) {
            let next = curr && curr.next
            if (curr) {
                curr.next = start
            }
            pre.next = next
            start = curr
            curr = next
        }
        end = pre
    }
};

