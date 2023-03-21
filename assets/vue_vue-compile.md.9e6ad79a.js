import{_ as e,c as t,o as r,a as l}from"./app.876eb61b.js";const v=JSON.parse('{"title":"Vue 编译器为什么如此强大","description":"","frontmatter":{},"headers":[{"level":2,"title":"说一下 vue 模版编译的原理是什么","slug":"说一下-vue-模版编译的原理是什么","link":"#说一下-vue-模版编译的原理是什么","children":[]},{"level":2,"title":"说一下 Vue complier 的实现原理是什么样的？","slug":"说一下-vue-complier-的实现原理是什么样的","link":"#说一下-vue-complier-的实现原理是什么样的","children":[]},{"level":2,"title":"Vue 模版编译原理","slug":"vue-模版编译原理","link":"#vue-模版编译原理","children":[]},{"level":2,"title":"源码实现","slug":"源码实现","link":"#源码实现","children":[]}],"relativePath":"vue/vue-compile.md","lastUpdated":1679387290000}'),a={name:"vue/vue-compile.md"},i=l('<h1 id="vue-编译器为什么如此强大" tabindex="-1">Vue 编译器为什么如此强大 <a class="header-anchor" href="#vue-编译器为什么如此强大" aria-hidden="true">#</a></h1><h2 id="说一下-vue-模版编译的原理是什么" tabindex="-1"><strong>说一下 <em>vue</em> 模版编译的原理是什么</strong> <a class="header-anchor" href="#说一下-vue-模版编译的原理是什么" aria-hidden="true">#</a></h2><blockquote><p>简单说，<em>Vue</em> 的编译过程就是将 <em>template</em> 转化为 <em>render</em> 函数的过程。会经历以下阶段：</p><ul><li>生成 <em>AST</em> 树</li><li>优化</li><li><em>codegen</em></li></ul></blockquote><blockquote><p>首先解析模版，生成 <em>AST</em> 语法树(一种用 <em>JavaScript</em> 对象的形式来描述整个模板)。 使用大量的正则表达式对模板进行解析，遇到标签、文本的时候都会执行对应的钩子进行相关处理。</p><p><em>Vue</em> 的数据是响应式的，但其实模板中并不是所有的数据都是响应式的。有一些数据首次渲染后就不会再变化，对应的 <em>DOM</em> 也不会变化。那么优化过程就是深度遍历 <em>AST</em> 树，按照相关条件对树节点进行标记。这些被标记的节点(静态节点)我们就可以跳过对它们的比对，对运行时的模板起到很大的优化作用。</p><p>编译的最后一步是将优化后的 <em>AST</em> 树转换为可执行的代码。</p></blockquote><h2 id="说一下-vue-complier-的实现原理是什么样的" tabindex="-1"><strong>说一下 <em>Vue complier</em> 的实现原理是什么样的？</strong> <a class="header-anchor" href="#说一下-vue-complier-的实现原理是什么样的" aria-hidden="true">#</a></h2><blockquote><p>在使用 vue 的时候，我们有两种方式来创建我们的 HTML 页面，第一种情况，也是大多情况下，我们会使用模板 template 的方式，因为这更易读易懂也是官方推荐的方法；第二种情况是使用 render 函数来生成 HTML，它比 template 更接近最终结果。</p><p>complier 的主要作用是解析模板，生成渲染模板的 <em>render</em>， 而 <em>render</em> 的作用主要是为了生成 <em>VNode</em></p><p>complier 主要分为 3 大块：</p><ul><li>parse：接受 template 原始模板，按着模板的节点和数据生成对应的 ast</li><li>optimize：遍历 ast 的每一个节点，标记静态节点，这样就知道哪部分不会变化，于是在页面需要更新时，通过 diff 减少去对比这部分 DOM，提升性能</li><li>generate 把前两步生成完善的 ast，组成 render 字符串，然后将 render 字符串通过 new Function 的方式转换成渲染函数</li></ul></blockquote><h2 id="vue-模版编译原理" tabindex="-1">Vue 模版编译原理 <a class="header-anchor" href="#vue-模版编译原理" aria-hidden="true">#</a></h2><p>vue 中的模板 template 无法被浏览器解析并渲染，因为这不属于浏览器的标准，不是正确的 HTML 语法，所有需要将 template 转化成一个 JavaScript 函数，这样浏览器就可以执行这一个函数并渲染出对应的 HTML 元素，就可以让视图跑起来了，这一个转化的过程，就成为模板编译。模板编译又分三个阶段，解析 parse，优化 optimize，生成 generate，最终生成可执行函数 render。</p><ul><li><strong>解析阶段</strong>：使用大量的正则表达式对 template 字符串进行解析，将标签、指令、属性等转化为抽象语法树 AST。</li><li><strong>优化阶段</strong>：遍历 AST，找到其中的一些静态节点并进行标记，方便在页面重渲染的时候进行 diff 比较时，直接跳过这一些静态节点，优化 runtime 的性能。</li><li><strong>生成阶段</strong>：将最终的 AST 转化为 render 函数字符串。</li></ul><h2 id="源码实现" tabindex="-1">源码实现 <a class="header-anchor" href="#源码实现" aria-hidden="true">#</a></h2><p>TODO</p>',11),n=[i];function o(m,u,d,p,c,s){return r(),t("div",null,n)}const _=e(a,[["render",o]]);export{v as __pageData,_ as default};
