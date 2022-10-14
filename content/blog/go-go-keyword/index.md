---
title: Go's go Keyword
date: "2022-10-14"
description: "通過對go關鍵字的底層匯編實現分析，能窺探到「協程」的真面目"
---

協程，又稱為微線程，纖程。英文名 Coroutine。

而 go 關鍵詞啟動的是 goroutine，可見這個 go 關鍵字就是實現協程。

在 Go 语言中，表达式 go f(x, y, z)会启动一个新的 goroutine 运行函数 f(x, y, z)。函数 f，变量 x、y、z 的值是在原 goroutine 计算的，只有函数 f 的执行是在新的 goroutine 中的。显然，新的 goroutine 不能和当前 go 线程用同一个栈，否则会相互覆盖。

先看看正常的函数调用，下面是调用 f(1, 2, 3)时的汇编代码：首先将参数 1、2、3 进栈，然后调用函数 f。

    MOVL    $1, 0(SP)
    MOVL    $2, 4(SP)
    MOVL    $3, 8(SP)
    CALL    f(SB)

下面是 go f(1, 2, 3)生成的代码：

    MOVL    $1, 0(SP)
    MOVL    $2, 4(SP)
    MOVL    $3, 8(SP)
    PUSHQ   $f(SB)
    PUSHQ   $12
    CALL    runtime.newproc(SB)
    POPQ    AX
    POPQ    AX

runtime.newproc 函数接受的参数分别是：参数大小，新的 goroutine 是要运行的函数，函数的 n 个参数。

> 1. 在 runtime.newproc 中，会新建一个栈空间，将栈参数的 12 个字节拷贝到新栈空间中并让栈指针指向参数。
> 2. 这时的线程状态有点像当被调度器剥夺 CPU 后一样，寄存器 PC、SP 会被保存到类似于进程控制块的一个结构体 struct G 内。
> 3. f 被存放在了 struct G 的 entry 域，后面进行调度器恢复 goroutine 的运行，新线程将从 f 开始执行。

##### 总结

go 关键字的实现仅仅是一个语法糖衣而已，也就是：

    go f(args)

可以看作

    runtime.newproc(size, f, args)

參考：  
[go 關鍵字](https://tiancaiamao.gitbooks.io/go-internals/content/zh/03.3.html)
