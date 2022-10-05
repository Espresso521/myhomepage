---
title: 關於這個部落格
date: "2022-09-29"
description: "很高興能用Gatsby在短短的2週時間內，完成了這個部落格的開發。在此分享一下自己的心得體會。"
---

> **Gatsby** enables developers to build fast, secure, and powerful websites using a _React-based framework_ and innovative data layer that makes integrating different content, APIs, and services into one web experience incredibly simple.

正如 Gatsby 官方網站描述的一樣，我僅使用了兩週的時間，就完成了這個部落格的開發。

我主要参考了 Gatsby 的中文网站 **_[Gatsby 中文网](https://www.gatsbyjs.cn/)_**

按照網站的教程實際操作一遍，能實現一個帶導航欄的部落格框架，教程詳細講解了：

> - Gatsby 的開發環境搭建
> - Gatsby 嵌套佈局（Layout）的使用
> - Gatsby 的數據源插件以及使用 GraphiQL 查詢數據
> - Gatsby 中以編程的方式創建頁面
> - 網站的上線準備

Gatsby 的官網會提供一些網頁模版，模板的下載地址是 **_[Gatsby Starter Library](https://www.gatsbyjs.com/starters/)_**。

我在學習完 Gatsby 中文教程網站以後，借鑒了 **_[Gatsby-starter-blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog)_** 這個模板完成了我現在的這個部落格。

**_[Gatsby-starter-blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog)_** 這個模板已經完成了一個部落格的所有基本功能，在此基礎上，我引入了 **_[ant.design](https://ant.design/index-cn)_** 作為我的控件庫使用。

#### 後期的擴展

因為博客的編寫是用的 Markdown 語法，寫完的 Markdown 文件，以 md 的文件形式，保存在整個工程當中，所以如果我需要發布新的文章，我需要寫完文章以後，放到工程裡面，然後重新編譯和發布項目，才能更新文章列表。為了提高效率，我想了兩種方案。

> 1. 使用 wordpress 作為我的 CMS，通過 **_[gatsby-source-wordpress](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-wordpress/)_** 插件，拉取數據展示，這樣可以將前後台解耦合，也很符合 Gatsby 的設計初心。
> 2. 使用 AWS S3 和 CloudFront 來部署我的靜態網頁，通過在 gatsby-node.js 文件中編寫腳本，將 build 以後的 public/ 文件夾的內容，推到 S3 存儲桶中，實現 CI/CD 的功能。我將參考 **_[deploying-gatsbyjs-to-amazon-aws](http://lofi.fi/deploying-gatsbyjs-to-amazon-aws/)_**。

我是一個有激情的程序員，如果你有程序方面的問題，可以給我發送郵件。
