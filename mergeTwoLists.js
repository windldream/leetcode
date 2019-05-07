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
// var mergeTwoLists = function(l1, l2) {
//     let dummy = new ListNode(), curr = dummy;

//     if (!l1 && !l2) {
//         return l1;
//     }
    
//     while (l1 || l2) {
//         if ((l1 && l2 && l1.val <= l2.val) || (l1 && !l2)) {
//             curr.val = l1.val;
//             l1 = l1.next;
//         } else if ((l1 && l2 && l1.val > l2.val) || (l2 && !l1)) {
//             curr.val = l2.val;
//             l2 = l2.next;
//         }

//         if (l1 || l2) {
//             curr.next = new ListNode();
//             curr = curr.next;
//         }
//     }

//     return dummy;
// };

// 优化
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(), curr = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            curr = curr.next; 
            l1 = l1.next;
        } else {
            curr.next = l2;
            curr = curr.next; 
            l2 = l2.next;
        }
    }

    if (!l1) {
        curr.next = l2;
    } else {
        curr.next = l1;
    }

    return dummy.next;
};