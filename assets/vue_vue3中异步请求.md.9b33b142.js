import{_ as s,c as n,o as a,a as l}from"./app.a78b92bc.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"vue3 中异步请求还没结束，组件销毁了，数据应该办？处理不？怎么处理？","slug":"vue3-中异步请求还没结束-组件销毁了-数据应该办-处理不-怎么处理","link":"#vue3-中异步请求还没结束-组件销毁了-数据应该办-处理不-怎么处理","children":[]}],"relativePath":"vue/vue3中异步请求.md","lastUpdated":1679387290000}'),e={name:"vue/vue3中异步请求.md"},p=l(`<h3 id="vue3-中异步请求还没结束-组件销毁了-数据应该办-处理不-怎么处理" tabindex="-1">vue3 中异步请求还没结束，组件销毁了，数据应该办？处理不？怎么处理？ <a class="header-anchor" href="#vue3-中异步请求还没结束-组件销毁了-数据应该办-处理不-怎么处理" aria-hidden="true">#</a></h3><p>在 Vue3 中，当一个组件被销毁时，它的生命周期钩子 beforeUnmount 会被触发。在这个钩子函数中，您可以取消异步请求并释放资源，以避免可能发生的内存泄漏。</p><p>例如，如果您在组件中使用了 axios 进行异步请求，可以在 beforeUnmount 钩子函数中使用 axios 的取消请求功能来取消请求。具体的做法是在创建请求时，将返回的 CancelToken 保存到一个实例变量中，并在 beforeUnmount 中调用 cancel()方法以取消请求。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">import axios from &#39;axios&#39;;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">export default {</span></span>
<span class="line"><span style="color:#abb2bf;">  data() {</span></span>
<span class="line"><span style="color:#abb2bf;">    return {</span></span>
<span class="line"><span style="color:#abb2bf;">      cancelToken: null,</span></span>
<span class="line"><span style="color:#abb2bf;">      data: null</span></span>
<span class="line"><span style="color:#abb2bf;">    };</span></span>
<span class="line"><span style="color:#abb2bf;">  },</span></span>
<span class="line"><span style="color:#abb2bf;">  methods: {</span></span>
<span class="line"><span style="color:#abb2bf;">    fetchData() {</span></span>
<span class="line"><span style="color:#abb2bf;">      this.cancelToken = axios.CancelToken.source();</span></span>
<span class="line"><span style="color:#abb2bf;">      axios.get(&#39;/api/data&#39;, { cancelToken: this.cancelToken.token })</span></span>
<span class="line"><span style="color:#abb2bf;">        .then(response =&gt; {</span></span>
<span class="line"><span style="color:#abb2bf;">          this.data = response.data;</span></span>
<span class="line"><span style="color:#abb2bf;">        })</span></span>
<span class="line"><span style="color:#abb2bf;">        .catch(error =&gt; {</span></span>
<span class="line"><span style="color:#abb2bf;">          console.error(error);</span></span>
<span class="line"><span style="color:#abb2bf;">        });</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">  },</span></span>
<span class="line"><span style="color:#abb2bf;">  beforeUnmount() {</span></span>
<span class="line"><span style="color:#abb2bf;">    if (this.cancelToken) {</span></span>
<span class="line"><span style="color:#abb2bf;">      this.cancelToken.cancel();</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">  }</span></span>
<span class="line"><span style="color:#abb2bf;">};</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#b392f0;">import axios from &#39;axios&#39;;</span></span>
<span class="line"><span style="color:#b392f0;"></span></span>
<span class="line"><span style="color:#b392f0;">export default {</span></span>
<span class="line"><span style="color:#b392f0;">  data() {</span></span>
<span class="line"><span style="color:#b392f0;">    return {</span></span>
<span class="line"><span style="color:#b392f0;">      cancelToken: null,</span></span>
<span class="line"><span style="color:#b392f0;">      data: null</span></span>
<span class="line"><span style="color:#b392f0;">    };</span></span>
<span class="line"><span style="color:#b392f0;">  },</span></span>
<span class="line"><span style="color:#b392f0;">  methods: {</span></span>
<span class="line"><span style="color:#b392f0;">    fetchData() {</span></span>
<span class="line"><span style="color:#b392f0;">      this.cancelToken = axios.CancelToken.source();</span></span>
<span class="line"><span style="color:#b392f0;">      axios.get(&#39;/api/data&#39;, { cancelToken: this.cancelToken.token })</span></span>
<span class="line"><span style="color:#b392f0;">        .then(response =&gt; {</span></span>
<span class="line"><span style="color:#b392f0;">          this.data = response.data;</span></span>
<span class="line"><span style="color:#b392f0;">        })</span></span>
<span class="line"><span style="color:#b392f0;">        .catch(error =&gt; {</span></span>
<span class="line"><span style="color:#b392f0;">          console.error(error);</span></span>
<span class="line"><span style="color:#b392f0;">        });</span></span>
<span class="line"><span style="color:#b392f0;">    }</span></span>
<span class="line"><span style="color:#b392f0;">  },</span></span>
<span class="line"><span style="color:#b392f0;">  beforeUnmount() {</span></span>
<span class="line"><span style="color:#b392f0;">    if (this.cancelToken) {</span></span>
<span class="line"><span style="color:#b392f0;">      this.cancelToken.cancel();</span></span>
<span class="line"><span style="color:#b392f0;">    }</span></span>
<span class="line"><span style="color:#b392f0;">  }</span></span>
<span class="line"><span style="color:#b392f0;">};</span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>在这个示例中，我们在 data 函数中定义了一个 cancelToken 变量和一个 data 变量，然后在 fetchData 方法中使用 axios 创建了一个请求，并将返回的 CancelToken 保存到 cancelToken 变量中。在 beforeUnmount 钩子函数中，我们检查 cancelToken 变量是否存在，如果存在则调用 cancel()方法以取消请求。</p><p>这样，当组件被销毁时，就可以安全地取消未完成的请求并释放资源，从而避免内存泄漏。</p>`,6),c=[p];function o(r,b,t,i,f,u){return a(),n("div",null,c)}const m=s(e,[["render",o]]);export{d as __pageData,m as default};
