### 一、flex 弹性的概念：

弹性盒子是一种用于按行或按列布局元素的一维布局方法，元素可以膨胀以填充额外的空间，收缩以适应更小的空间，适用于任何元素上，如果一个元素使用了 flex 弹性布局（以下都会简称为：flex 布局），则会在内部形成 BFC，flex 布局已经得到了所有浏览器的支持，这意味着，现在就能放心，安全的使用这项技术。


### 问：**flex:1;代表什么意思

flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。

flex-grow 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

flex-shrink 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

flex 属性属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

所以flex: 1表示的含义是等分剩余空间。

### 二、主轴与交叉轴：

学习 flex 布局需要明白”主轴“与”交叉轴“的概念，采用 flex 布局的元素，称为”容器“ （ flex container），它的所有子元素都是容器的”项目“（flex item），容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做 main start ，结束位置叫做 main end ；交叉轴的开始位置叫做 cross start ，结束位置叫做 cross end 。

1、flex-direction
flex-direction 属性决定主轴的方向（即项目的排列方向）
row（默认值）：主轴为水平方向，起点在左端。
row-reverse：主轴为水平方向，起点在右端。
column：主轴为垂直方向，起点在上沿。
column-reverse：主轴为垂直方向，起点在下沿。

2、flx-wrap
默认情况下，项目都排在一条线上，无论是否给定宽度，都是不会主动换行的：

如果需要换行，需要设置 flex-wrap
nowrap（默认值）：不换行。
wrap：换行，第一行在上方。
wrap-reverse：换行，第一行在下方。

3、flex-flow
flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap

4、justify-content
justify-content 属性定义了项目在主轴上的对齐方式

flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-around：每个项目两侧的间隔相等。
space-between：两端对齐，项目之间的间隔都相等。
space-evenly：每个项目的间隔与项目和容器之间的间隔是相等的。

5、align-items
align-items 属性定义项目在交叉轴上如何对齐
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）: 如果项目未设置高度或设为 auto，将占满整个容器的高度。

6、align-content
align-content 属性定义了多根轴线的对齐方式，前提是需要设置 flex-wrap: wrap，否则不会有效

flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。
stretch（默认值）：轴线占满整个交叉轴。

### 项目的属性

1 order
order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0，可以是负数。

2 flex-grow
flex-grow flex 容器中剩余空间的多少应该分配给项目，也称为扩展规则。最终的项目的宽度为：自身宽度 + 容器剩余空间分配宽度，flex-grow 最大值是 1，超过 1 按照 1 来扩展

3 flex-shrink
flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值，默认值是 1

4 flex-basis
flex-basis 指定了子项在容器主轴方向上的初始大小，优先级高于自身的宽度 width

5 flex
flex 属性是 flex-grow , flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto 。后两个属性可选。

6 align-self
align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto ，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch 。

### 五、关于 flex 布局在 IE 浏览器上的坑

虽然 flex 布局 已经得到了 IE 浏览器 的支持，但是部分属性在 IE 浏览器 上会不生效，或者效果与其他浏览器不一致，在 Flexbugs 中可以看到 flex 布局 在 IE 浏览器 糟糕表现的详情描述

flex 布局 是目前最流行的布局方式之一，优点是浏览器兼容性较好，学习成本较低，上手简单，可以快速通过 flex 布局 实现布局效果。缺点是相较于 grid 网格布局 来说， flex 布局 是 一维布局 ，一般用于单行或者单列的布局，如果要实现多行多列的布局，推荐使用 gird 网格布局 。
