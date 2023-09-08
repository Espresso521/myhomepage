---
title: 薛之谦-你还要我怎样
date: "2023-09-06"
description: "我陪你走的路你不能忘，因为那是我～，最快乐的时光！"
---

#### 听个歌还听哭了？自己都不懂自己。

`youtube:https://www.youtube.com/embed/9LFk4TmBFY4`

    先用的gatsby-remark-responsive-iframe插件来播放
    请求被拒绝，以为是插件的问题。
    于是换成了gatsby-remark-embed-youtube插件来播放
    发现可以了。

    仔细一看，url必须是这个格式：
    https://www.youtube.com/embed/9LFk4TmBFY4

    如果从youtube网站直接copy url，是下面这个样子。
    https://www.youtube.com/watch?v=9LFk4TmBFY4

##### https://www.gatsbyjs.com/plugins/gatsby-remark-responsive-iframe/

这个插件给的例子要给出能播放的 url 啊，你看看人家 gatsby-remark-embed-youtube 的例子：

##### https://www.gatsbyjs.com/plugins/gatsby-remark-embed-youtube/

看来用心写 Example 是很重要的。
