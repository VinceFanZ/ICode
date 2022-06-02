/**
 * 25. 合并两个排序的链表
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let dum = new ListNode(0),
    current = dum
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }
    current = current.next
  }
  current.next = l1 ? l1 : l2
  return dum.next
}

var t1 = new ListNode(1)
t1.next = new ListNode(2)
t1.next.next = new ListNode(4)
var t2 = new ListNode(1)
t2.next = new ListNode(3)
t2.next.next = new ListNode(4)

console.log(mergeTwoLists(t1, t2))
