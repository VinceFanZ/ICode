/**
 * 24. 反转链表
 */

import { LinkedList } from './LinkedList.mjs'

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let current = head,
    pre = null
  while (current) {
    let temp = current.next
    current.next = pre
    pre = current
    current = temp
  }

  return pre
}
