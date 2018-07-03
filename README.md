## 前言

之前在看七月老师的视频的时候，看到了有一个样式是-webkit-filter，不知道是什么，于是查了一下，原来是滤镜吖。但是在微信小程序里使用的时候，下面一直飘红线，再仔细查了一下，原来是在Chrome, Safari, Opera中使用 -webkit-filter，而微信小程序里使用的话，使用filter就可以了。一时间好奇了下，就多试了几个函数，以下是详细的笔记

## 定义

filter 属性定义了元素(通常是<img>)的可视效果(例如：模糊与饱和度)。

## 分类
- none 默认值，没有效果。
- blur()  高斯模糊
- brightness() 亮度
- contrast() 对比度
- drop-shadow() 阴影
- grayscale()  灰度
- hue-rotate() 色相旋转
- invert()  反色
- opacity() 透明度
- saturate()  饱和度
- sepia()  复古色
- url() SVG滤镜

## 使用

> 提示:滤镜通常使用百分比 (如：75%), 当然也可以使用小数来表示 (如：0.75)。

#### blur

高斯模糊：blur(radius),给图像设置高斯模糊。"radius"一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起， 所以值越大越模糊；
如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。

```
filter: blur(18px);
```

![image](https://raw.githubusercontent.com/Urwateryi/MarkDownPic/master/filter/blur.png)

#### brightness

亮度：给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。
```
filter: brightness(70%);
```


![image](https://raw.githubusercontent.com/Urwateryi/MarkDownPic/master/filter/brightness.png)

#### contrast

对比度：调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比。若没有设置值，默认是1。
```
filter: contrast(50%);
```


![image](https://raw.githubusercontent.com/Urwateryi/MarkDownPic/master/filter/contrast.png)

#### drop-shadow

给图像设置一个阴影效果。阴影是合成在图像下面，可以有模糊度的，可以以特定颜色画出的遮罩图的偏移版本。 函数接受<shadow>(在CSS3背景中定义)类型的值，除了"inset"关键字是不允许的。该函数与已有的box-shadow box-shadow属性很相似；不同之处在于，通过滤镜，一些浏览器为了更好的性能会提供硬件加速。<shadow>参数如下：

<offset-x> <offset-y> (必须)
这是设置阴影偏移量的两个 <length>值. <offset-x> 设定水平方向距离. 负值会使阴影出现在元素左边. <offset-y>设定垂直距离.负值会使阴影出现在元素上方。查看<length>可能的单位.
如果两个值都是0, 则阴影出现在元素正后面 (如果设置了 <blur-radius> and/or <spread-radius>，会有模糊效果).
<blur-radius> (可选)
这是第三个code><length>值. 值越大，越模糊，则阴影会变得更大更淡.不允许负值 若未设定，默认是0 (则阴影的边界很锐利).
<spread-radius> (可选)
这是第四个 <length>值. 正值会使阴影扩张和变大，负值会是阴影缩小.若未设定，默认是0 (阴影会与元素一样大小). 
注意: Webkit, 以及一些其他浏览器 不支持第四个长度，如果加了也不会渲染。

<color> (可选)
查看 <color>该值可能的关键字和标记。若未设定，颜色值基于浏览器。在Gecko (Firefox), Presto (Opera)和Trident (Internet Explorer)中， 会应用colorcolor属性的值。另外, 如果颜色值省略，WebKit中阴影是透明的。

```
filter: drop-shadow(15rpx 15rpx 10rpx #999999);
```


![image](https://raw.githubusercontent.com/Urwateryi/MarkDownPic/master/filter/drop-shadow.png)

#### grayscale

grayscale(100%)为黑白色。

灰度：将图像转换为灰度图像。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0；


```
filter: grayscale(60%);
```


![image](https://raw.githubusercontent.com/Urwateryi/MarkDownPic/master/filter/grayscale.png)

#### hue-rotate
色相：给图像应用色相旋转。"angle"一值设定图像会被调整的[色环](https://baike.baidu.com/item/%E8%89%B2%E7%9B%B8%E7%8E%AF/6472068?fr=aladdin )角度值。值为0deg，则图像无变化。若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。

```
filter: hue-rotate(90deg);
```


![image](https://raw.githubusercontent.com/Urwateryi/MarkDownPic/master/filter/hue-rotate.png)

#### invert
反相：反转输入图像。值定义转换的比例。100%的价值是完全反转。值为0%则图像无变化。值在0%和100%之间，则是效果的线性乘子。 若值未设置，值默认是0。

```
filter: invert(0.8);
```


![image](https://raw.githubusercontent.com/Urwateryi/MarkDownPic/master/filter/invert.png)

#### opacity
透明度：转化图像的透明程度。值定义转换的比例。值为0%则是完全透明，值为100%则图像无变化。值在0%和100%之间，则是效果的线性乘子，也相当于图像样本乘以数量。 若值未设置，值默认是1。该函数与已有的opacity属性很相似，不同之处在于通过filter，一些浏览器为了提升性能会提供硬件加速。

```
filter: opacity(20%);
```


![image](https://raw.githubusercontent.com/Urwateryi/MarkDownPic/master/filter/opacity.png)

#### saturate

饱和度：转换图像饱和度。值定义转换的比例。值为0%则是完全不饱和，值为100%则图像无变化。其他值，则是效果的线性乘子。超过100%的值是允许的，则有更高的饱和度。 若值未设置，值默认是1。
```
filter: saturate(0%);
```


![image](https://raw.githubusercontent.com/Urwateryi/MarkDownPic/master/filter/saturate.png)

#### sepia

 褐色：复古色 将图像转换为深褐色。值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0；
```
filter: sepia(70%);
```

![image](https://raw.githubusercontent.com/Urwateryi/MarkDownPic/master/filter/sepia.png)

#### 复合函数

复合函数中，多个滤镜使用空格分开。注意: 顺序是非常重要的 (例如使用 grayscale() 后再使用 sepia()将产生一个完整的灰度图片)。


```
filter: saturate(0%) drop-shadow(15rpx 15rpx 10rpx #999999);
```


![image](https://raw.githubusercontent.com/Urwateryi/MarkDownPic/master/filter/%E5%A4%8D%E5%90%88%E5%87%BD%E6%95%B0.png)

## 具体代码

[demo](https://github.com/Urwateryi/CSS-filter-Demo.git)