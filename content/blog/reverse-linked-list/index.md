---
title: LeetCode 206. Reverse Linked List
date: "2023-04-20"
description: "最近看leetcode的簡單算法，看到鏈表的逆序輸出這道題，感覺這個簡單難度的題目可以很好的體現迭代和遞歸的思想，遂紀錄一下。"
---

> 題目描述非常簡單  
> Given the head of a singly linked list, reverse the list, and return the reversed list.

**Follow up**: A linked list can be reversed either iteratively or recursively. Could you implement both?

首先貼出迭代的解法

    fun reverseList(head: ListNode?): ListNode? {
        var prev: ListNode? = null
        var current = head
        var next: ListNode?

        while (current != null) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }

        return prev
    }

方法非常簡單易懂，就是將 1，2 位置的節點的指向互換，然後互換 2，3 位置的節點的指向，然後 3，4 位置的，直到最後一位，然後返回的值是最後一個節點的指針。

**這裡返回的是 prev**，這裡要是想清楚了，迭代的解法理解的就沒啥問題了。

再貼出遞歸的解法

    fun reverseList(head: ListNode?): ListNode? {
        if (head == null || head.next == null) {
            return head
        }

        val reversedListHead = reverseList(head.next)
        head.next!!.next = head
        head.next = null

        return reversedListHead
    }

遞歸算法的核心思想就是先遞歸到倒數第二個節點，這樣最後一次遞歸的時候，由於傳入的是 head.next,所以會將最後一個元素返回。

**這裡返回最後一個元素的節點作為整個程序的返回值**

**被遞歸押入棧的操作，就是** **_head.next!!.next = head_** 和 **_head.next = null_** 和 **_return reverseListHead_**

每次彈出棧頂的操作，由於返回值都是一樣的，所以最終的返回值就是最後一次返回的值**reversedListHead**，但是 **_head.next!!.next = head_** 和 **_head.next = null_** 的操作，每次都在轉換堆棧裡面的棧變量的指向。

簡單來說，函數的第一行判斷，只會執行一次，用於遞歸的退出。
if (head == null || head.next == null) {
return head
}

最後一行的 return，是所有出棧的操作的返回值，也就是同一個值，即程序的返回值。

出棧的時候，有值改變的執行操作就是 **_head.next!!.next = head_** 和 **_head.next = null_**

所以說遞歸是有標準寫法的，不過這個標準寫法，有點難理解。

規律總結為兩點：

> 1） 第一個 return 是結束遞歸的條件  
> 2） 遞歸調用和第二個 return 之間的操作，都是入棧和出棧時候遞歸執行的邏輯。
