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
var reverseKGroup = function(head, k) {
    if (k < 2) {
        return head;
    }

    if (k === 2) {
        return swapPairs(head);
    }

    let num = k, node, stack = [], dummy = new ListNode(), curr = dummy;

    while (head) {
        // node用于临时保存head
        node = head;
        while (k && head) {
            k--;
            stack.push(head);
            head = head.next;
        }
        // 当链表的个数不够k个时
        if (k > 0) {
            curr.next = node;
            break;
        }
        while (stack.length) {
            curr.next = new ListNode(stack.pop().val);
            curr = curr.next;
        }
        k = num;
    }

    return dummy.next;

    function swapPairs(head) {
        if (!head || !head.next) {
            return head;
        }
    
        let next = head.next;
        head.next = swapPairs(next.next);
        next.next = head;
        return next;
    };
};