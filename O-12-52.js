/**
 * 52. 两个链表的第一个公共节点
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let A = headA,
    B = headB
  while (A !== B) {
    A = A ? A.next : headB
    B = B ? B.next : headA
  }
  return A
}

var t1 = new ListNode(1)
t1.next = new ListNode(2)
t1.next.next = new ListNode(4)
var t2 = new ListNode(3)
t2.next = new ListNode(2)
t2.next.next = new ListNode(4)

console.log(getIntersectionNode(t1, t2))
