/**
 * 22. 链表中倒数第k个节点
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let current = head
  let len = 0
  while (current) {
    len++
    current = current.next
  }
  let i = 0
  current = head
  let res = null
  while (current) {
    if (i === len - k) {
      res = current
      break
    }
    i++
    current = current.next
  }
  return res
}

var t1 = new ListNode(4)
// t1.next = new ListNode(5)
// t1.next.next = new ListNode(1)
// t1.next.next.next = new ListNode(9)

console.log(getKthFromEnd(t1, 4))
