import{_ as s,c as n,o as a,a as l}from"./app.3bf89c0b.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"节流","slug":"节流","link":"#节流","children":[]}],"relativePath":"js/节流.md","lastUpdated":1679387290000}'),e={name:"js/节流.md"},p=l(`<h3 id="节流" tabindex="-1">节流 <a class="header-anchor" href="#节流" aria-hidden="true">#</a></h3><p>//定义：当持续触发事件时，保证隔间时间触发一次事件。 //1. 懒加载、滚动加载、加载更多或监听滚动条位置； //2. 百度搜索框，搜索联想功能； //3. 防止高频点击提交，防止表单重复提交；</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">function throttle(fn,wait){</span></span>
<span class="line"><span style="color:#abb2bf;">    let pre = 0;</span></span>
<span class="line"><span style="color:#abb2bf;">    return function(...args){</span></span>
<span class="line"><span style="color:#abb2bf;">        let now = Date.now();</span></span>
<span class="line"><span style="color:#abb2bf;">        if( now - pre &gt;= wait){</span></span>
<span class="line"><span style="color:#abb2bf;">            fn.apply(this,args);</span></span>
<span class="line"><span style="color:#abb2bf;">            pre = now;</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">function handle(){</span></span>
<span class="line"><span style="color:#abb2bf;">    console.log(Math.random());</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">window.addEventListener(&quot;mousemove&quot;,throttle(handle,1000));</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#b392f0;">function throttle(fn,wait){</span></span>
<span class="line"><span style="color:#b392f0;">    let pre = 0;</span></span>
<span class="line"><span style="color:#b392f0;">    return function(...args){</span></span>
<span class="line"><span style="color:#b392f0;">        let now = Date.now();</span></span>
<span class="line"><span style="color:#b392f0;">        if( now - pre &gt;= wait){</span></span>
<span class="line"><span style="color:#b392f0;">            fn.apply(this,args);</span></span>
<span class="line"><span style="color:#b392f0;">            pre = now;</span></span>
<span class="line"><span style="color:#b392f0;">        }</span></span>
<span class="line"><span style="color:#b392f0;">    }</span></span>
<span class="line"><span style="color:#b392f0;">}</span></span>
<span class="line"><span style="color:#b392f0;">function handle(){</span></span>
<span class="line"><span style="color:#b392f0;">    console.log(Math.random());</span></span>
<span class="line"><span style="color:#b392f0;">}</span></span>
<span class="line"><span style="color:#b392f0;">window.addEventListener(&quot;mousemove&quot;,throttle(handle,1000));</span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,3),o=[p];function r(t,c,i,b,f,d){return a(),n("div",null,o)}const m=s(e,[["render",r]]);export{y as __pageData,m as default};
