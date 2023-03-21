import{_ as e,c as t,o,a as d}from"./app.876eb61b.js";const g=JSON.parse('{"title":"你不知道的 computed Vue2","description":"","frontmatter":{},"headers":[{"level":2,"title":"从一道面试题说起","slug":"从一道面试题说起","link":"#从一道面试题说起","children":[]},{"level":2,"title":"Vue2 中 computed 源码解读","slug":"vue2-中-computed-源码解读","link":"#vue2-中-computed-源码解读","children":[{"level":3,"title":"methods","slug":"methods","link":"#methods","children":[]},{"level":3,"title":"computed","slug":"computed","link":"#computed","children":[]}]},{"level":2,"title":"Vue3 中的 computed","slug":"vue3-中的-computed","link":"#vue3-中的-computed","children":[]},{"level":2,"title":"说一下 watch 与 computed 的区别是什么？以及他们的使用场景分别是什么？","slug":"说一下-watch-与-computed-的区别是什么-以及他们的使用场景分别是什么","link":"#说一下-watch-与-computed-的区别是什么-以及他们的使用场景分别是什么","children":[]},{"level":2,"title":"在 Vue 中要获取当前时间你会放到 computed 还是 methods 里？","slug":"在-vue-中要获取当前时间你会放到-computed-还是-methods-里","link":"#在-vue-中要获取当前时间你会放到-computed-还是-methods-里","children":[]}],"relativePath":"vue/computed.md","lastUpdated":1679387290000}'),c={name:"vue/computed.md"},l=d('<h1 id="你不知道的-computed-vue2" tabindex="-1">你不知道的 computed Vue2 <a class="header-anchor" href="#你不知道的-computed-vue2" aria-hidden="true">#</a></h1><h2 id="从一道面试题说起" tabindex="-1">从一道面试题说起 <a class="header-anchor" href="#从一道面试题说起" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">computed 和 methods 有什么区别?</p><ol><li>在使用时，computed 当做属性使用，而 methods 则当做方法调用</li><li>computed 可以具有 getter 和 setter，因此可以赋值，而 methods 不行</li><li>computed 无法接收多个参数，而 methods 可以</li><li>computed 具有缓存，而 methods 没有</li></ol></div><h2 id="vue2-中-computed-源码解读" tabindex="-1">Vue2 中 computed 源码解读 <a class="header-anchor" href="#vue2-中-computed-源码解读" aria-hidden="true">#</a></h2><h3 id="methods" tabindex="-1">methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><p>vue 对 methods 的处理比较简单，只需要遍历 methods 配置中的每个属性，将其对应的函数使用 bind 绑定当前组件实例后复制其引用到组件实例中即可</p><h3 id="computed" tabindex="-1">computed <a class="header-anchor" href="#computed" aria-hidden="true">#</a></h3><p>当组件实例触发生命周期函数<code>beforeCreate</code>后，它会做一系列事情，其中就包括对 computed 的处理</p><p>它会遍历 computed 配置中的所有属性，为每一个属性创建一个 Watcher 对象，并传入一个函数，该函数的本质其实就是 computed 配置中的 getter，这样一来，getter 运行过程中就会收集依赖</p><p>但是和渲染函数不同，为<strong>计算属性创建的 Watcher 不会立即执行</strong>，因为<strong>要考虑到该计算属性是否会被渲染函数使用，如果没有使用，就不会得到执行</strong>。因此，在创建 Watcher 的时候，它使用了 lazy 配置，lazy 配置可以让 Watcher 不会立即执行。</p><p>收到<code>lazy</code>的影响，Watcher 内部会保存两个关键属性来实现缓存，一个是<code>value</code>，一个是<code>dirty</code></p><p><code>value</code>属性用于保存 Watcher 运行的结果，受<code>lazy</code>的影响，该值在最开始是<code>undefined</code></p><p><code>dirty</code>属性用于指示当前的<code>value</code>是否已经过时了，即是否为脏值，受<code>lazy</code>的影响，该值在最开始是<code>true</code></p><p><strong>Watcher</strong>创建好后，vue 会使用代理模式，将计算属性挂载到组件实例中</p><p>当读取计算属性时，vue 检查其对应的 Watcher 是否是脏值，如果是，则运行函数，计算依赖，并得到对应的值，保存在 Watcher 的 value 中，然后设置 dirty 为 false，然后返回。</p><p>如果 dirty 为 false，则直接返回 watcher 的 value，即为缓存的原理 巧妙的是，在依赖收集时，被依赖的数据<strong>不仅会收集到计算属性的 Watcher，还会收集到组件的 Watcher</strong></p><p>当计算属性的依赖变化时，会先触发<strong>计算属性的 Watcher</strong>执行，此时，它<strong>只需设置</strong><code>**dirty**</code><strong>为 true 即可，不做任何处理。</strong></p><p>由于依赖同时会收集到组件的 Watcher，因此组件会重新渲染，而重新渲染时又读取到了计算属性，由于计算属性目前已为 dirty，因此会重新运行 getter 进行运算</p><p>而对于计算属性的 setter，则极其简单，当设置计算属性时，直接运行 setter 即可</p><h2 id="vue3-中的-computed" tabindex="-1">Vue3 中的 computed <a class="header-anchor" href="#vue3-中的-computed" aria-hidden="true">#</a></h2><p>TODO</p><h2 id="说一下-watch-与-computed-的区别是什么-以及他们的使用场景分别是什么" tabindex="-1"><strong>说一下 <em>watch</em> 与 <em>computed</em> 的区别是什么？以及他们的使用场景分别是什么？</strong> <a class="header-anchor" href="#说一下-watch-与-computed-的区别是什么-以及他们的使用场景分别是什么" aria-hidden="true">#</a></h2><blockquote><p>区别：</p><ol><li>都是观察数据变化的（相同）</li><li>计算属性将会混入到 vue 的实例中，所以需要监听自定义变量；watch 监听 data 、props 里面数据的变化；</li><li>computed 有缓存，它依赖的值变了才会重新计算，watch 没有；</li><li>watch 支持异步，computed 不支持；</li><li>watch 是一对多（监听某一个值变化，执行对应操作）；computed 是多对一（监听属性依赖于其他属性）</li><li>watch 监听函数接收两个参数，第一个是最新值，第二个是输入之前的值；</li><li>computed 属性是函数时，都有 get 和 set 方法，默认走 get 方法，get 必须有返回值（return）</li></ol></blockquote><blockquote><p>watch 的 参数：</p><ul><li>deep：深度监听</li><li>immediate ：组件加载立即触发回调函数执行</li></ul></blockquote><p><strong>对于 Computed：</strong></p><ul><li>它支持缓存，只有依赖的数据发生了变化，才会重新计算</li><li>不支持异步，当 Computed 中有异步操作时，无法监听数据的变化</li><li>computed 的值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于 data 声明过，或者父组件传递过来的 props 中的数据进行计算的。</li><li>如果一个属性是由其他属性计算而来的，这个属性依赖其他的属性，一般会使用 computed</li><li>如果 computed 属性的属性值是函数，那么默认使用 get 方法，函数的返回值就是属性的属性值；在 computed 中，属性有一个 get 方法和一个 set 方法，当数据发生变化时，会调用 set 方法。</li></ul><p><strong>对于 Watch：</strong></p><ul><li>它不支持缓存，数据变化时，它就会触发相应的操作</li><li>支持异步监听</li><li>监听的函数接收两个参数，第一个参数是最新的值，第二个是变化之前的值</li><li>当一个属性发生变化时，就需要执行相应的操作</li><li>监听数据必须是 data 中声明的或者父组件传递过来的 props 中的数据，当发生变化时，会触发其他操作，函数有两个的参数： <ul><li>immediate：组件加载立即触发回调函数</li><li>deep：深度监听，发现数据内部的变化，在复杂数据类型中使用，例如数组中的对象发生变化。需要注意的是，deep 无法监听到数组和对象内部的变化。</li></ul></li></ul><p>当想要执行异步或者昂贵的操作以响应不断的变化时，就需要使用 watch。 <strong>总结：</strong></p><ul><li>computed 计算属性 : 依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值。</li><li>watch 侦听器 : 更多的是<strong>观察</strong>的作用，<strong>无缓存性</strong>，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作。</li></ul><p><strong>运用场景：</strong></p><ul><li>当需要进行数值计算,并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时都要重新计算。</li><li>当需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许执行异步操作 ( 访问一个 API )，限制执行该操作的频率，并在得到最终结果前，设置中间状态。这些都是计算属性无法做到的。</li></ul><h2 id="在-vue-中要获取当前时间你会放到-computed-还是-methods-里" tabindex="-1"><strong>在 <em>Vue</em> 中要获取当前时间你会放到 <em>computed</em> 还是 <em>methods</em> 里？</strong> <a class="header-anchor" href="#在-vue-中要获取当前时间你会放到-computed-还是-methods-里" aria-hidden="true">#</a></h2><blockquote><p>放在 <em>computed</em> 里面。因为 <em>computed</em> 只有在它的相关依赖发生改变时才会重新求值。相比而言，方法只要发生重新渲染，<em>methods</em> 调用总会执行所有函数。</p></blockquote>',34),a=[l];function u(i,r,p,m,s,h){return o(),t("div",null,a)}const v=e(c,[["render",u]]);export{g as __pageData,v as default};
