---
title: Android - Camera2 and Surfaceview
date: "2023-08-30"
description: "項目中使用camera2，遇到了一個Preview的坑，紀錄一下。"
---

#### Android - [Camera2](https://developer.android.com/training/camera2/capture-sessions-requests)

之前的項目一直在用 camera+surfaceview 進行預覽，拍照等操作。  
隨著技術的發展，現在 camera 已經過時了，基本都要求使用 camera2 進行開發。  
camera2 的學習成本還是有的，如果是簡單的項目，建議用 camerax。

##### 遇到的坑

> camera2+surfaceview 預覽拉伸問題

問題很簡單，就是用 camera2+surfaceview 預覽，怎麼調整 surface 的高寬，都是拉伸的效果。

google 官方給出了一個例子，但是沒有給出完整的代碼，我感覺這個例子還不如不給。例子的連接如下：  
https://developer.android.com/codelabs/android-camera2-preview#4

這個例子主要是說：recreate a CameraCaptureSession every time the surface size changes.

**於是我在 surfaceview 的 surfaceChanged 生命週期中，重新創建 session，然並卵。也可能是我學藝不精吧。**

##### 解決方案

https://qiita.com/Rei_2020/items/63fe4216835141d03c4a  
SurfaceView の形を正方形にし、幅と高さを同じ値に設定すれば、プレビューのアスペクト比が保たれます。  
camera2 + surfaceview 的時候，surfaceview 只能保持正方形。。這不是坑嗎？？

##### 升級方案

正方形的效果不行，顯示區域太小，能不能用 16:9 的區域預覽呢？於是又找到了方案。
https://qiita.com/Rei_2020/items/05630308ae8385433505  
用 textureview 代替 surfaceview，但是這裡要自己處理 textureview 的屏幕旋轉問題。

##### 疑問

camerax 庫有一個 PreviewView，自己就解決了屏幕適配和旋轉的問題，這個控件為啥不能給 camera2 拿來用呢？？可能就連 google 的大神們都覺得給 camera2 做一個 PreviewView 太麻煩了吧。
