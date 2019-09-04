/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let ans = []
    while (head) {
        let target = head
        let next = target && target.next
        let len = ans.length
        while (next) {
            if (target.val < next.val) {
                ans.push(next.val)
                break
            }
            next = next.next
        }
        if (ans.length === len) {
            ans.push(0)
        }
        head = head.next
    }
};