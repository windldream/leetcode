/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 两次遍历
// var removeNthFromEnd = function(head, n) {
//     let len = 0, i, dummy = new ListNode(), first = head;
//     dummy.next = head;

//     while (head) {
//         len++;
//         head = head.next;
//     }

//     i = len - n;
//     first = dummy;
//     while (i > 0) {
//         i--;
//         first = first.next;
//     }

//     first.next = first.next.next;
//     return dummy.next;
// };

// 一次遍历
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(), first, second, i;
    
    dummy.next = head;
    first = dummy;
    second = dummy;
    
    for (i = 0; i <= n; i++) {
        first = first.next;
    }

    while (first) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;
    return dummy.next;
};
