/**
 * Definition for polynomial singly-linked list.
 * function PolyNode(x=0, y=0, next=null) {
 *     this.coefficient = x;
 *     this.power = y;
 *     this.next = next;
 * }
 */

/**
 * @param {PolyNode} poly1
 * @param {PolyNode} poly2
 * @return {PolyNode}
 */
var addPoly = function(poly1, poly2) {
  const dummy = new PolyNode()
  let cur = dummy
  while (poly1 !== null || poly2 !== null) {
    if (poly1 === null) {
      cur.next = new PolyNode(poly2.coefficient, poly2.power)
      poly2 = poly2.next
    } else if (poly2 === null) {
      cur.next = new PolyNode(poly1.coefficient, poly1.power)
      poly1 = poly1.next
    } else {
      if (poly1.power > poly2.power) {
        cur.next = new PolyNode(poly1.coefficient, poly1.power)
        poly1 = poly1.next
      } else if (poly1.power < poly2.power) {
        cur.next = new PolyNode(poly2.coefficient, poly2.power)
        poly2 = poly2.next
      } else if (poly1.power === poly2.power) {
        const coeffi = poly1.coefficient + poly2.coefficient
        if (coeffi === 0) {
          poly1 = poly1.next
          poly2 = poly2.next
          continue
        } else {
          cur.next = new PolyNode(coeffi, poly1.power)
          poly1 = poly1.next
          poly2 = poly2.next
        }
      }
    }
    cur = cur.next
  }
  return dummy.next
};