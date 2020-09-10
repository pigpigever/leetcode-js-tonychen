// 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
//
// 示例 1:
//
// 输入: 4->2->1->3
// 输出: 1->2->3->4
// 示例 2:
//
// 输入: -1->5->3->4->0
// 输出: -1->0->3->4->5

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
const sortList = function(head) {
    /**
     * 找到链表中间的节点
     * @param head
     * @return {*}
     */
    const findMidNode = (head) => {
        let slow = head
        let fast = head.next
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
    /**
     * 归并排序，将链表排成有序链表
     * @param head
     * @return {null|*}
     */
    const mergeSort = (head) => {
        if (head && !head.next) {
            return head
        }
        const mid = findMidNode(head)
        const next = mid.next
        const prev = { next: null }
        mid.next = null
        let left = mergeSort(head)
        let right = mergeSort(next)
        let res = prev
        // 如果两个链表都不为空
        // 那就逐个比较两个链表
        while (left && right) {
            if (left && right) {
                if (left.val < right.val) {
                    res.next = new ListNode(left.val)
                    left = left.next
                } else {
                    res.next = new ListNode(right.val)
                    right = right.next
                }
            }
            res = res.next
        }
        // 如果逐个比对之后还有没遍历完成的
        // 直接把它接入到链表后面即可
        if (left) {
            res.next = left
        }
        if (right) {
            res.next = right
        }
        return prev.next
    }
    if (!head) {
        return null
    }
    return mergeSort(head)
}
