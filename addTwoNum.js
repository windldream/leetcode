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

var addTwoNumbers = function(l1, l2) {
    let p = l1, q = l2, dummyHead = new ListNode(null),
        carry = 0, curr = dummyHead;

    while (p || q) {
        let x = p && p.val || 0;
        let y = q && q.val || 0;
        let sum = x + y + carry;
        carry = sum > 9 ? 1 : 0;
        // 创建一个数值为 (sum % 10)(sum mod 10)的新结点
        // 并将其设置为当前结点的下一个结点, 然后将当前结点前进到下一个结点
        curr.next = new ListNode(sum % 10);
        curr = curr.next
        p = p && p.next;
        q = q && q.next;
    }

    if (carry > 0) {
        curr.next = new ListNode(carry);
    }

    return dummyHead.next;
};

// 数组解法
// var addTwoNumbers = function(l1, l2) {
//     let result = [], carry = 0;

//     while (l1 || l2) {
//         let x = l1 && l1.val || 0;
//         let y = l2 && l2.val || 0;
//         let sum = x + y + carry;
//         if (sum > 9) {
//             carry = 1;
//             result.push(sum - 10);
//         } else {
//             result.push(sum);
//         }

//         l1 = l1 && l1.next;
//         l2 = l2 && l2.next;
//     }

//     if (carry) {
//         result.push(1);
//     }

//     return result;
// };

// 字符串解法
// var addTwoNumbers = function(l1, l2) {
//     let num1 = l1.val + '', num2 = l2.val + '', result;

//     while (l1 = l1.next) {
//         num1 = l1.val + num1;
//     }

//     while (l2 = l2.next) {
//         num2 = l2.val + num2;
//     }

//     result = (Number(num1) + Number(num2) + '').split('');

//     return result;

// };