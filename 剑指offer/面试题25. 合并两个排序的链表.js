/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 定义新链表
    let head = new ListNode()
    let list = head
    // 循环比对大小
    while (l1 && l2) {
        let val = 0
        if (l1.val <= l2.val) {
            val = l1.val
            l1 = l1.next
        } else {
            val = l2.val
            l2 = l2.next
        }
        list.next = new ListNode(val)
        list = list.next
    }
    list.next = l1 || l2
    // 返回合并后的新链表
    return head.next
};