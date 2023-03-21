import{_ as s,c as n,o as a,a as e}from"./app.5146eedb.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"防抖","slug":"防抖","link":"#防抖","children":[]}],"relativePath":"js/防抖.md","lastUpdated":1679387290000}'),l={name:"js/防抖.md"},p=e(`<h3 id="防抖" tabindex="-1">防抖 <a class="header-anchor" href="#防抖" aria-hidden="true">#</a></h3><p>//定义：触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。 //搜索框搜索输入。只需用户最后一次输入完，再发送请求 //手机号、邮箱验证输入检测 onchange oninput 事件 //窗口大小 Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">const debounce = (fn, wait, immediate) =&gt; {</span></span>
<span class="line"><span style="color:#abb2bf;">let timer = null;</span></span>
<span class="line"><span style="color:#abb2bf;">return function (...args) {</span></span>
<span class="line"><span style="color:#abb2bf;">if (timer) clearTimeout(timer);</span></span>
<span class="line"><span style="color:#abb2bf;">if (immediate &amp;&amp; !timer) {</span></span>
<span class="line"><span style="color:#abb2bf;">fn.call(this, args);</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#abb2bf;">fn.call(this, args);</span></span>
<span class="line"><span style="color:#abb2bf;">}, wait);</span></span>
<span class="line"><span style="color:#abb2bf;">};</span></span>
<span class="line"><span style="color:#abb2bf;">};</span></span>
<span class="line"><span style="color:#abb2bf;">const betterFn = debounce(() =&gt; console.log(&quot;fn 防抖执行了&quot;), 1000, true);</span></span>
<span class="line"><span style="color:#abb2bf;">document.addEventListener(&quot;scroll&quot;, betterFn);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#b392f0;">const debounce = (fn, wait, immediate) =&gt; {</span></span>
<span class="line"><span style="color:#b392f0;">let timer = null;</span></span>
<span class="line"><span style="color:#b392f0;">return function (...args) {</span></span>
<span class="line"><span style="color:#b392f0;">if (timer) clearTimeout(timer);</span></span>
<span class="line"><span style="color:#b392f0;">if (immediate &amp;&amp; !timer) {</span></span>
<span class="line"><span style="color:#b392f0;">fn.call(this, args);</span></span>
<span class="line"><span style="color:#b392f0;">}</span></span>
<span class="line"><span style="color:#b392f0;">timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#b392f0;">fn.call(this, args);</span></span>
<span class="line"><span style="color:#b392f0;">}, wait);</span></span>
<span class="line"><span style="color:#b392f0;">};</span></span>
<span class="line"><span style="color:#b392f0;">};</span></span>
<span class="line"><span style="color:#b392f0;">const betterFn = debounce(() =&gt; console.log(&quot;fn 防抖执行了&quot;), 1000, true);</span></span>
<span class="line"><span style="color:#b392f0;">document.addEventListener(&quot;scroll&quot;, betterFn);</span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,3),t=[p];function c(o,r,i,b,m,u){return a(),n("div",null,t)}const y=s(l,[["render",c]]);export{d as __pageData,y as default};
