---
title: jpegtran-cffi踩坑记录
date: "2024-02-27"
description: "第三方库还是要看着github的README来安装才行"
---

> 后台收到了前端android手机拍摄上传的照片以后，通过jpegtran-cffi进行了角度的旋转。   
> 但是旋转后的JPEG照片，在右侧会有10个像素宽度左右的错位问题。   
> 为了验证这个问题，我决定安装jpegtran-cffi到本地，在本地试一下jpegtran-cffi的图片旋转功能。  


#### [根据PyPi上的安装命令安装(pip install jpegtran-cffi)，直接失败](https://pypi.org/project/jpegtran-cffi/)

> 我想也不会这么简单吧，再仔细一看，原来有requirment  
>
    Requirements
      CPython 2.6, 2.7, 3.3 or PyPy
      cffi
      libjpeg8 with headers (earlier versions will not work)

> 安装完requirements以后，再安装jpegtran-cffi，报错：
    ld: warning: directory not found for option '-L/opt/homebrew/opt/jpeg/lib'
    ld: library not found for -ljpeg

> 找不到lib库，这个库需要安装  
    brew install jpeg-turbo
> 并且要导出路径到环境变量，如下：
    export LDFLAGS="-L/usr/local/opt/jpeg-turbo/lib $LDFLAGS"
    export CPPFLAGS="-I/usr/local/opt/jpeg-turbo/include $CPPFLAGS"

> 依赖库的路径都设置好了，继续**pip install jpegtran-cffi**   
> 又报一个错  
    jmorecfg.h:317:16: error: redefinition of enumerator 'FALSE'

##### 这里就是大坑一个 #####

> 这里报了一个redefinition的错误，这个上网查了半天，也没有啥有用信息。  
> 毕竟就是一个重复定义问题嘛，解决重复定义就行了。  
> 但是问题的关键是，我咋知道为啥会有重复定义啊。
>
> 还好我经验丰富，我查看了一下jpegtran-cffi库的github的README，原来GitHub上是这样写的，我cao！！  
    Requirements
      CPython >=2.7 or >=3.5 or PyPy
      cffi >= 1.0
      libturbojpeg with headers

> Github上说要用libturbojpeg，但是我之前根据PyPi的文档，安装了libjpeg8，我想是不是这两个库导致了redefinition？？  
> 于是我怀着忐忑的心情，卸载了libjpeg8库。再编译不会报redefinition错误了。  
>
> 不出意外，意外就要发生了。虽然redefinition错误没了，这次又报错：
    'jpeglib.h' file not found

> 我通过find命令找到了系统里面的jpeglib.h文件
    find /usr/local/include /opt/homebrew/include -name jpeglib.h

> 这个路径是在libjpeg-turbo库里面呢！！之前设置的Path都有问题，于是我把之前设置的Path的libjpeg都改成了libjpeg-turbo，如下： 
    export PATH="$HOME/development/flutter/bin:$PATH"
    export PATH="/opt/homebrew/opt/jpeg-turbo/bin:$PATH"
    export LDFLAGS="-L/opt/homebrew/opt/jpeg-turbo/lib $LDFLAGS"
    export CPPFLAGS="-I/opt/homebrew/opt/jpeg-turbo/include $CPPFLAGS"
    export PKG_CONFIG_PATH="/opt/homebrew/opt/jpeg-turbo/lib/pkgconfig"
    export CPATH="/opt/homebrew/include:$CPATH"
    export PYTHONPATH="${PYTHONPATH}:/opt/homebrew/lib/python3.10/site-packages"

> 我用VSCode的RUN来执行python代码，竟然还在报错，说找不到Module  
    Exception has occurred: ModuleNotFoundError
    No module named 'jpegtran'
      File "/Users/huze/pythonTest/jpegtran_demo.py", line 1, in <module>
        from jpegtran import JPEGImage
    ModuleNotFoundError: No module named 'jpegtran'

> 我已经通过pip3 list看到了jpegtran了啊，我cao！！
    pip3 list
    Package       Version
    ------------- -------
    cffi          1.16.0
    jpegtran-cffi 0.5.2
    pip           23.3.1
    pycparser     2.21
    setuptools    68.2.2
    wheel         0.41.3

> 算了，这个问题不纠结了。我直接用python命令来执行吧，代码就一行。  
    from jpegtran import JPEGImage
    JPEGImage('./image.jpeg').rotate(90).save('./rotated_image.jpg')

> 在python文件的路径下，直接通过命令
    python3 jpegtran_demo.py
> 执行成功

> 这个库在rotate的时候，果然有问题，如下图：

![image](./image.jpeg) 

![rotated_image](./rotated_image.jpg) 
