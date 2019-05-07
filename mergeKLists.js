/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// Time Limit Exceeded
var mergeKLists = function(lists) {
    let dummy = new ListNode(), l1 = dummy, l2;

    while (lists.length) {
        l2 = lists.unshift();
        l1 = mergeTwoLists(l1, l2);
    }

    return dummy;
    
    function mergeTwoLists(l1, l2) {
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
};