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
var reverseList = function(head) {
    // 如果为空那么直接返回 null
    if (!head) {
        return null
    }
    // 当前指向的节点
    let cur = head.next
    let pre = head
    // 开始反转链表
    while (cur) {
        let next = cur.next
        pre.next = cur.next
        cur.next = head
        head = cur
        cur = next
    }
    // 返回反转结果
    return head
};