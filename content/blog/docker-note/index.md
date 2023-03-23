---
title: docker的常用命令
date: "2023-03-23"
description: "最近在AWS的EC2上用docker部署了一個GO的HTTP服務，紀錄一下常用的docker命令"
---

> 首先是**docker ps -a**命令，可以看到正在運行的容器列表。容器和 Image 是不一樣的，有點類似【類和對象】的關係

    [ec2-user@ip-172-31-7-210 src]$ docker ps -a
    CONTAINER ID   IMAGE                     COMMAND        CREATED             STATUS                 PORTS                                       NAMES
    c88bea1dfcef   kotaku_go_server:v1.1.0   "./imserver"   About an hour ago   Up About an hour   0.0.0.0:5211->5211/tcp, :::5211->5211/tcp   kotakuServer

> 使用**docker stop containerID**命令，可以停止正在運行的容器

> 使用**docker rm containerID**命令，可以刪除停止的容器

> 使用**docker images**命令，可以看到現有的 images 列表

    [ec2-user@ip-172-31-7-210 src]$ docker images
    REPOSITORY         TAG             IMAGE ID       CREATED             SIZE
    kotaku_go_server   v1.1.0          3bcfb9f3bc36   About an hour ago   363MB
    golang             1.19.2-alpine   f9a40cb7e8ec   5 months ago        352MB

> 使用**docker rmi IMAGEID**命令，刪除 image

> 使用 docker build -t kotaku_go_server:v1.1.0 . 命令，可以編譯 Dockerfile 文件，產生 image，-t 是指定 tag 的選項

    [ec2-user@ip-172-31-7-210 src]$ docker build -t kotaku_go_server:v1.1.0 .
    Sending build context to Docker daemon  338.9kB
    Step 1/5 : FROM golang:1.19.2-alpine
    ---> f9a40cb7e8ec
    Step 2/5 : WORKDIR /Users/huze/Desktop/gotest/GoIMServer/src
    ---> Running in 7add31dba46d
    Removing intermediate container 7add31dba46d
    ---> 53ecf72edcae
    Step 3/5 : ADD . .
    ---> 3a0ddcda139a
    Step 4/5 : RUN go build -o imserver
    ---> Running in fe4c3a5071a9
    go: downloading github.com/gorilla/mux v1.8.0
    go: downloading github.com/gorilla/websocket v1.5.0
    Removing intermediate container fe4c3a5071a9
    ---> 42923ef821b5
    Step 5/5 : CMD [ "./imserver" ]
    ---> Running in ef619009a570
    Removing intermediate container ef619009a570
    ---> 3bcfb9f3bc36
    Successfully built 3bcfb9f3bc36
    Successfully tagged kotaku_go_server:v1.1.0

> 使用**docker run --name kotakuServer -d -p 5211:5211 kotaku_go_server:v1.1.0**命令，可以啟動容器運行 image，--name 可以指定容器的名字，否則會得到一個隨機的名字，運行成功後打印容器的 ID

    [ec2-user@ip-172-31-7-210 src]$ docker run --name kotakuServer -d -p 5211:5211 kotaku_go_server:v1.1.0
    c88bea1dfcef539f8b39af2e6ecc5d7ee469bc1de2ad5c245b7b601143e8b4b9
