## 计算机基础

### ASCII unicode，utf8，utf16

ASCII => unicode，utf8，utf16

需要注意的是，Unicode 只是一个符号集，它只规定了符号的二进制代码，却没有规定这个二进制代码应该如何存储。

比如，汉字严的 Unicode 是十六进制数 4E25，转换成二进制数足足有 15 位（100111000100101），也就是说，这个符号的表示至少需要 2 个字节。表示其他更大的符号，可能需要 3 个字节或者 4 个字节，甚至更多。

这里就有两个严重的问题，第一个问题是，如何才能区别 Unicode 和 ASCII ？计算机怎么知道三个字节表示一个符号，而不是分别表示三个符号呢？第二个问题是，我们已经知道，英文字母只用一个字节表示就够了，如果 Unicode 统一规定，每个符号用三个或四个字节表示，那么每个英文字母前都必然有二到三个字节是 0，这对于存储来说是极大的浪费，文本文件的大小会因此大出二三倍，这是无法接受的。

UTF-16 比较好理解,就是任何字符对应的数字都用两个字节来保存。但是很显然如果都是英文字母这做有点浪费.明明用一个字节能表示一个字符为啥整两个啊.

于是又有个 UTF-8,这里的 8 非常容易误导人,8 不是指一个字节,难道一个字节表示一个字符?实际上不是.当用 UTF-8 时表示一个字符是可变的,有可能是用一个字节表示一个字符,也可能是两个,三个.当然最多不能超过 3 个字节了.反正是根据字符对应的数字大小来确定.

于是 UTF-8 和 UTF-16 的优劣很容易就看出来了.如果全部英文或英文与其他文字混合,但英文占绝大部分,用 UTF-8 就比 UTF-16 节省了很多空间.而如果全部是中文这样类似的字符或者混合字符中中文占绝大多数.UTF-16 就占优势了,可以节省很多空间

http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html

### PNG8 PNG24 PNG32

PNG8：PNG 8 中的 8，其实指的是 8bits，相当于用 2^8（2 的 8 次方）大小来存储一张图片的颜色种类，2^8 等于 256，也就是说 PNG 8 能存储 256 种颜色，一张图片如果颜色种类很少，将它设置成 PNG 8 得图片类型是非常适合的。

PNG24：PNG 24 中的 24，相当于 3 乘以 8 等于 24，就是用三个 8bits 分别去表示 R（红）、G（绿）、B（蓝）。R(0~255),G(0~255),B(0~255)，可以表达 256 乘以 256 乘以 256=16777216 种颜色的图片，这样 PNG 24 就能比 PNG 8 表示色彩更丰富的图片。但是所占用的空间相对就更大了。

PNG32：PNG 32 中的 32，相当于 PNG 24 加上 8bits 的透明颜色通道，就相当于 R（红）、G（绿）、B（蓝）、A（透明）。

### PNG 压缩

PNG 图片的压缩，分两个阶段：

- 预解析：
  png 图片用差分编码（Delta encoding）对图片进行预处理，处理每一个的像素点中每条通道的值，差分编码主要有几种：
- 压缩：
  压缩阶段会将预处理阶段得到的结果进行 Deflate 压缩，它由 Huffman 编码 和 LZ77 压缩构成。
  如前面所说，Deflate 压缩会标记图片所有的重复数据，并记录数据特征和结构，会得到一个压缩比最大的 png 图片 编码数据。

### 进程 线程

进程是 CPU 资源分配的最小单位
线程是 CPU 调度的最小单位

一个进程由一个或多个线程组成，线程是一个进程中代码的不同执行路线

以 Chrome 浏览器中为例，当你打开一个 Tab 页时，其实就是创建了一个进程，一个进程中可以有多个线程，比如渲染线程、JS 引擎线程、HTTP 请求线程等等。
当你发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁。
