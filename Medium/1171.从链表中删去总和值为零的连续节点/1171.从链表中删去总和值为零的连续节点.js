/*
 * @lc app=leetcode.cn id=1171 lang=javascript
 *
 * [1171] 从链表中删去总和值为零的连续节点
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
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
    let curr = head, arr = []
    while (curr) {
        arr.push(curr)
        curr = curr.next
    }
    let len = arr.length
    for (let i = len - 1; i >= 0; i--) {
        let sum = 0
        for (let j = i; j >= 0; j--) {
            const { val } = arr[j]
            if (sum + val === 0) {
                arr.splice(j, i - j + 1)
                i = j
                break
            } else {
                sum += val
            }
        }
    }
    if (!arr[0]) {
        return null
    }
    let ans = new ListNode(arr[0].val)
    curr = ans
    for (let i = 1; i < arr.length; i++) {
        let next = new ListNode(arr[i].val)
        curr.next = next
        curr = next
    }
    return ans
};
