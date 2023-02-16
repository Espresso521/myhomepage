---
title: Android Multimedia Develop
date: "2023-02-16"
description: "Recently, I wrote an android app using MediaCodec, Camera2, MediaRecorder, AudioRecord, AudioTrack. Hope to provide some help to people who want to do android multimedia development"
---

最近我使用 android 的 MediaCodec, Camera2, MediaRecorder, AudioRecord, AudioTrack 這些組建，開發了一個 android 多媒體的使用程序，希望能給想做 android 多媒体开发的人提供一些幫助。

無論基於哪個平台開發多媒體應用，都需要接觸到音頻和視頻數據的編碼和解碼，於是我基於 Android 平台，利用 Camera2 接口獲取攝像頭預覽数据（YUV420_888），通过 MediaCodec 进行编码和解码，再利用 SurfaceView 渲染解码后的数据。

Android 的 Camera2 接口和 Camera 接口的设计理念不一样，Camera 借口通过 onPreivew 回调方法将 YUV420 数据回调给使用者，Camera2 接口通过注册需要预览数据的 Surface，将 YUV420 数据提供给注册的 Surface，不同的 Surface 用于不同的目的。

一般情况下：

> 使用 SurfaceView 的 Surface 註冊進行攝像頭畫面預覽  
> 使用 ImageReader 的 Surface 進行回調數據的採集與處理  
> 使用 MediaRecorder 的 Surface 進行 MP4 文件的錄製

我寫的應用實現了這三種常見的情況。

一般情況下，基於 Android 的多媒體應用開發，不會直接錄製 MP4 文件進行上傳，因為 MP4 文件體積過大，不便於傳輸，也不便於視頻分析。一般會將 YUV420 數據通過 MediaCodec 編碼為 H264 碼流進行傳輸。接受端使用 MediaCodec 進行解碼，將圖像渲染到 SurfaceView 上，或者進行圖像數據的 AI 分析。

我寫的應用 MediaCodec 的編碼和解碼都選擇的是同步模式，也就是 MediaCodec 的 input 和 output queue 是順序調用的，同步模式的兼容性很好。根據我個人的開發經驗，有些芯片的 MediaCodec 在異步模式下很容易出現異常，再就是有些芯片必須確定餵給 MediaCodec 的第一幀 H264 為關鍵幀，否則就會報異常。

如果使用 MediaCodec 編解碼，則音頻數據也需要單獨處理，一般情況下，Android 平台使用 AudioRecord 可以獲取到 Mic 的聲音的 PCM 數據，通過簡單的算法，可以將 PCM 數據轉換為 G711.a 的音頻編碼數據，進行傳輸。

我寫的應用也實現了 AudioRecord 的音頻採集，AudioTrack 的音頻播放功能。

![kotaku android camera2mediacodec](./camera2mediacodec.gif)

可以到 GitHub 下載[我的應用](https://github.com/Espresso521/android-engineer-codecheck)，直接編譯就可以運行。
