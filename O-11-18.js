/**
 * 18. 删除链表的节点
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let current = head
  let pre = null
  while (current) {
    if (current.val === val) {
      if (current.next) {
        current.val = current.next.val
        current.next = current.next.next
      } else {
        pre.next = null
      }
      break
    }
    pre = current
    current = current.next
  }

  return head
}

var t1 = new ListNode(4)
t1.next = new ListNode(5)
t1.next.next = new ListNode(1)
t1.next.next.next = new ListNode(9)

console.log(deleteNode(t1, 7))
