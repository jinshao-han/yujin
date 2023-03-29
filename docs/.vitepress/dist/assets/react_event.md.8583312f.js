import{_ as e,c as a,o as s,a as t}from"./app.7c7a7466.js";const y=JSON.parse('{"title":"React 事件机制","description":"","frontmatter":{},"headers":[{"level":2,"title":"React 事件机制","slug":"react-事件机制-1","link":"#react-事件机制-1","children":[]},{"level":2,"title":"React 的事件和普通的 HTML 事件有什么不同？","slug":"react-的事件和普通的-html-事件有什么不同","link":"#react-的事件和普通的-html-事件有什么不同","children":[]},{"level":2,"title":"React 组件中怎么做事件代理？它的原理是什么？","slug":"react-组件中怎么做事件代理-它的原理是什么","link":"#react-组件中怎么做事件代理-它的原理是什么","children":[]}],"relativePath":"react/event.md","lastUpdated":1679387290000}'),n={name:"react/event.md"},l=t(`<h1 id="react-事件机制" tabindex="-1">React 事件机制 <a class="header-anchor" href="#react-事件机制" aria-hidden="true">#</a></h1><h2 id="react-事件机制-1" tabindex="-1">React 事件机制 <a class="header-anchor" href="#react-事件机制-1" aria-hidden="true">#</a></h2><div class="language-jsx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">onClick</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">handleClick</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">bind</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;">&gt;点我&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">{</span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">handleClick</span><span style="color:#B392F0;">.bind(</span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">)}&gt;点我&lt;/</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>React 并不是将 click 事件绑定到了 div 的真实 DOM 上，而是在 document 处监听了所有的事件，当事件发生并且冒泡到 document 处的时候，React 将事件内容封装并交由真正的处理函数运行。<strong>这样的方式不仅仅减少了内存的消耗，还能在组件挂在销毁时统一订阅和移除事件。</strong></p><p>除此之外，冒泡到 document 上的事件也不是原生的浏览器事件，而是由 react 自己实现的合成事件（SyntheticEvent）。因此如果不想要是事件冒泡的话应该调用 event.preventDefault()方法，而不是调用 event.stopProppagation()方法。</p><p>JSX 上写的事件并没有绑定在对应的真实 DOM 上，而是通过事件代理的方式，将所有的事件都统一绑定在了 <code>document</code> 上。这样的方式不仅减少了内存消耗，还能在组件挂载销毁时统一订阅和移除事件。</p><p>另外冒泡到 <code>document</code> 上的事件也不是原生浏览器事件，而是 React 自己实现的合成事件。因此我们如果不想要事件冒泡的话，调用 <code>event.stopPropagation</code> 是无效的，而应该调用 <code>event.preventDefault</code>。</p><p>实现合成事件的目的如下：</p><ul><li>合成事件首先抹平了浏览器之间的兼容问题，另外这是一个跨浏览器原生事件包装器，赋予了跨浏览器开发的能力；</li><li>对于原生浏览器事件来说，浏览器会给监听器创建一个事件对象。如果你有很多的事件监听，那么就需要分配很多的事件对象，造成高额的内存分配问题。但是对于合成事件来说，有一个事件池专门来管理它们的创建和销毁，当事件需要被使用时，就会从池子中复用对象，事件回调结束后，就会销毁事件对象上的属性，从而便于下次复用事件对象。</li></ul><h2 id="react-的事件和普通的-html-事件有什么不同" tabindex="-1">React 的事件和普通的 HTML 事件有什么不同？ <a class="header-anchor" href="#react-的事件和普通的-html-事件有什么不同" aria-hidden="true">#</a></h2><p>区别：</p><ul><li>对于事件名称命名方式，原生事件为全小写，react 事件采用小驼峰；</li><li>对于事件函数处理语法，原生事件为字符串，react 事件为函数；</li><li>react 事件不能采用 return false 的方式来阻止浏览器的默认行为，而必须要地明确地调用<code>preventDefault()</code>来阻止默认行为。</li></ul><p>合成事件是 react 模拟原生 DOM 事件所有能力的一个事件对象，其优点如下：</p><ul><li>兼容所有浏览器，更好的跨平台；</li><li>将事件统一存放在一个数组，避免频繁的新增与删除（垃圾回收）。</li><li>方便 react 统一管理和事务机制。</li></ul><p>事件的执行顺序为原生事件先执行，合成事件后执行，合成事件会冒泡绑定到 document 上，所以尽量避免原生事件与合成事件混用，如果原生事件阻止冒泡，可能会导致合成事件不执行，因为需要冒泡到 document 上合成事件才会执行。</p><h2 id="react-组件中怎么做事件代理-它的原理是什么" tabindex="-1">React 组件中怎么做事件代理？它的原理是什么？ <a class="header-anchor" href="#react-组件中怎么做事件代理-它的原理是什么" aria-hidden="true">#</a></h2><p>React 基于 Virtual DOM 实现了一个 SyntheticEvent 层（合成事件层），定义的事件处理器会接收到一个合成事件对象的实例，它符合 W3C 标准，且与原生的浏览器事件拥有同样的接口，支持冒泡机制，所有的事件都自动绑定在最外层上。</p><p>在 React 底层，主要对合成事件做了两件事：</p><ul><li><strong>事件委派：</strong> React 会把所有的事件绑定到结构的最外层，使用统一的事件监听器，这个事件监听器上维持了一个映射来保存所有组件内部事件监听和处理函数。</li><li><strong>自动绑定：</strong> React 组件中，每个方法的上下文都会指向该组件的实例，即自动绑定 this 为当前组件。</li></ul>`,19),c=[l];function o(p,r,i,d,h,B){return s(),a("div",null,c)}const v=e(n,[["render",o]]);export{y as __pageData,v as default};