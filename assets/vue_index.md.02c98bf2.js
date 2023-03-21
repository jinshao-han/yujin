import{_ as e,c as m,o as a,a as t}from"./app.876eb61b.js";const u=JSON.parse('{"title":"Vue","description":"","frontmatter":{},"headers":[{"level":2,"title":"响应式编程","slug":"响应式编程","link":"#响应式编程","children":[]},{"level":2,"title":"组件化开发","slug":"组件化开发","link":"#组件化开发","children":[]},{"level":2,"title":"虚拟 DOM","slug":"虚拟-dom","link":"#虚拟-dom","children":[]}],"relativePath":"vue/index.md","lastUpdated":1679387290000}'),r={name:"vue/index.md"},n=t('<h1 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-hidden="true">#</a></h1><p><em>Vue</em> 是一个构建数据驱动的 <em>Web</em> 界面的渐进式框架。</p><p><em>Vue</em> 的目标是通过尽可能简单的 <em>API</em> 实现响应的数据绑定和组合的视图组件。核心是一个响应的数据绑定系统。</p><p>关于 <em>Vue</em> 的优点，主要有<strong>响应式编程、组件化开发、虚拟 <em>DOM</em></strong></p><h2 id="响应式编程" tabindex="-1"><strong>响应式编程</strong> <a class="header-anchor" href="#响应式编程" aria-hidden="true">#</a></h2><p>这里的响应式不是 @media, 媒体查询中的响应式布局，而是指 Vue 会自动对页面中某些数据的变化做出响应。这也就是 Vue 最大的优点，通过 <em>MVVM</em> 思想实现数据的双向绑定，让开发者不用再操作 <em>DOM</em> 对象，有更多的时间去思考业务逻辑。</p><h2 id="组件化开发" tabindex="-1"><strong>组件化开发</strong> <a class="header-anchor" href="#组件化开发" aria-hidden="true">#</a></h2><p><em>Vue</em> 通过组件，把一个单页应用中的各种模块拆分到一个一个单独的组件（<em>component</em>）中，我们只要先在父级应用中写好各种组件标签（占坑），并且在组件标签中写好要传入组件的参数（就像给函数传入参数一样，这个参数叫做组件的属性），然后再分别写好各种组件的实现（填坑），然后整个应用就算做完了。</p><p>组件化开发的优点：提高开发效率、方便重复使用、简化调试步骤、提升整个项目的可维护性、便于协同开发。</p><h2 id="虚拟-dom" tabindex="-1"><strong>虚拟 <em>DOM</em></strong> <a class="header-anchor" href="#虚拟-dom" aria-hidden="true">#</a></h2><p>在传统开发中，用 <em>JQuery</em> 或者原生的 <em>JavaScript DOM</em> 操作函数对 <em>DOM</em> 进行频繁操作的时候，浏览器要不停的渲染新的 <em>DOM</em> 树，导致在性能上面的开销特别的高。</p><p>而 <em>Virtual DOM</em> 则是虚拟 <em>DOM</em> 的英文，简单来说，他就是一种可以预先通过 <em>JavaScript</em> 进行各种计算，把最终的 <em>DOM</em> 操作计算出来并优化，由于这个 <em>DOM</em> 操作属于预处理操作，并没有真实的操作 <em>DOM</em>，所以叫做虚拟 <em>DOM</em>。最后在计算完毕才真正将 <em>DOM</em> 操作提交，将 <em>DOM</em> 操作变化反映到 <em>DOM</em> 树上。</p>',12),d=[n];function i(s,o,c,h,l,p){return a(),m("div",null,d)}const D=e(r,[["render",i]]);export{u as __pageData,D as default};
