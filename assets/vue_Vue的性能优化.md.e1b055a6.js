import{_ as s,c as n,o as a,a as p}from"./app.a78b92bc.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/Vue的性能优化.md","lastUpdated":1679387290000}'),l={name:"vue/Vue的性能优化.md"},e=p(`<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">、</span><span style="color:#98C379;">\`v-if\`</span><span style="color:#61AFEF;">和</span><span style="color:#98C379;">\`v-show\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#61AFEF;">频繁切换时使用</span><span style="color:#98C379;">\`v-show\`</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">利用其缓存特性</span></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#61AFEF;">首屏渲染时使用</span><span style="color:#98C379;">\`v-if\`</span><span style="color:#ABB2BF;">，</span><span style="color:#61AFEF;">如果为</span><span style="color:#98C379;">\`false\`</span><span style="color:#E06C75;">则不进行渲染</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">、</span><span style="color:#98C379;">\`v-for\`</span><span style="color:#61AFEF;">的</span><span style="color:#98C379;">\`key\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#E06C75;">列表变化时</span><span style="color:#ABB2BF;">，</span><span style="color:#61AFEF;">循环时使用唯一不变的</span><span style="color:#98C379;">\`key\`</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">借助其本地复用策略</span></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#E06C75;">列表只进行一次渲染时</span><span style="color:#ABB2BF;">，</span><span style="color:#98C379;">\`key\`</span><span style="color:#61AFEF;">可以采用循环的</span><span style="color:#98C379;">\`index\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">侦听器和计算属性</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#61AFEF;">侦听器</span><span style="color:#98C379;">\`watch\`</span><span style="color:#E06C75;">用于数据变化时引起其他行为</span></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#61AFEF;">多使用</span><span style="color:#98C379;">\`compouter\`</span><span style="color:#E06C75;">计算属性顾名思义就是新计算而来的属性</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">如果依赖的数据未发生变化</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">不会触发重新计算</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">合理使用生命周期</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#61AFEF;">在</span><span style="color:#98C379;">\`destroyed\`</span><span style="color:#E06C75;">阶段进行绑定事件或者定时器的销毁</span></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#61AFEF;">使用动态组件的时候通过</span><span style="color:#98C379;">\`keep-alive\`</span><span style="color:#E06C75;">包裹进行缓存处理</span><span style="color:#ABB2BF;">，</span><span style="color:#61AFEF;">相关的操作可以在</span><span style="color:#98C379;">\`actived\`</span><span style="color:#E06C75;">阶段激活</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">数据响应式处理</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#61AFEF;">不需要响应式处理的数据可以通过</span><span style="color:#98C379;">\`Object.freeze\`</span><span style="color:#E06C75;">处理</span><span style="color:#ABB2BF;">，</span><span style="color:#61AFEF;">或者直接通过</span><span style="color:#98C379;">\`this.xxx = xxx\`</span><span style="color:#E06C75;">的方式进行定义</span></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#61AFEF;">需要响应式处理的属性可以通过</span><span style="color:#98C379;">\`this.$set\`</span><span style="color:#E06C75;">的方式处理</span><span style="color:#ABB2BF;">，</span><span style="color:#61AFEF;">而不是</span><span style="color:#98C379;">\`JSON.parse(JSON.stringify(XXX))\`</span><span style="color:#E06C75;">的方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">6</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">路由加载方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#E06C75;">页面组件可以采用异步加载的方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">7</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">插件引入</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#E06C75;">第三方插件可以采用按需加载的方式</span><span style="color:#ABB2BF;">，</span><span style="color:#61AFEF;">比如</span><span style="color:#98C379;">\`element-ui\`</span><span style="color:#ABB2BF;">。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">8</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">减少代码量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#61AFEF;">采用</span><span style="color:#98C379;">\`mixin\`</span><span style="color:#E06C75;">的方式抽离公共方法</span></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#E06C75;">抽离公共组件</span></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#61AFEF;">定义公共方法至公共</span><span style="color:#98C379;">\`js\`</span><span style="color:#E06C75;">中</span></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#61AFEF;">抽离公共</span><span style="color:#98C379;">\`css\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">9</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">编译方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#61AFEF;">如果线上需要</span><span style="color:#98C379;">\`template\`</span><span style="color:#E06C75;">的编译</span><span style="color:#ABB2BF;">，</span><span style="color:#61AFEF;">可以采用完成版</span><span style="color:#98C379;">\`vue.esm.js\`</span></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#61AFEF;">如果线上无需</span><span style="color:#98C379;">\`template\`</span><span style="color:#E06C75;">的编译</span><span style="color:#ABB2BF;">，</span><span style="color:#61AFEF;">可采用运行时版本</span><span style="color:#98C379;">\`vue.runtime.esm.js\`</span><span style="color:#ABB2BF;">，</span><span style="color:#61AFEF;">相比完整版体积要小大约</span><span style="color:#98C379;">\`30%\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">渲染方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#E06C75;">服务端渲染</span><span style="color:#ABB2BF;">，</span><span style="color:#61AFEF;">如果是需要</span><span style="color:#98C379;">\`SEO\`</span><span style="color:#E06C75;">的网站可以采用服务端渲染的方式</span></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#E06C75;">前端渲染</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">一些企业内部使用的后端管理系统可以采用前端渲染的方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">11</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">字体图标的使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">   </span><span style="color:#E06C75;">有些图片图标尽可能使用字体图标</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;">、</span><span style="color:#FFAB70;">\`v-if\`</span><span style="color:#B392F0;">和</span><span style="color:#FFAB70;">\`v-show\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   </span><span style="color:#B392F0;">频繁切换时使用</span><span style="color:#FFAB70;">\`v-show\`</span><span style="color:#B392F0;">，利用其缓存特性</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   </span><span style="color:#B392F0;">首屏渲染时使用</span><span style="color:#FFAB70;">\`v-if\`</span><span style="color:#B392F0;">，</span><span style="color:#B392F0;">如果为</span><span style="color:#FFAB70;">\`false\`</span><span style="color:#B392F0;">则不进行渲染</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F8;">2</span><span style="color:#B392F0;">、</span><span style="color:#FFAB70;">\`v-for\`</span><span style="color:#B392F0;">的</span><span style="color:#FFAB70;">\`key\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   列表变化时，</span><span style="color:#B392F0;">循环时使用唯一不变的</span><span style="color:#FFAB70;">\`key\`</span><span style="color:#B392F0;">，借助其本地复用策略</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   列表只进行一次渲染时，</span><span style="color:#FFAB70;">\`key\`</span><span style="color:#B392F0;">可以采用循环的</span><span style="color:#FFAB70;">\`index\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F8;">3</span><span style="color:#B392F0;">、侦听器和计算属性</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   </span><span style="color:#B392F0;">侦听器</span><span style="color:#FFAB70;">\`watch\`</span><span style="color:#B392F0;">用于数据变化时引起其他行为</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   </span><span style="color:#B392F0;">多使用</span><span style="color:#FFAB70;">\`compouter\`</span><span style="color:#B392F0;">计算属性顾名思义就是新计算而来的属性，如果依赖的数据未发生变化，不会触发重新计算</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F8;">4</span><span style="color:#B392F0;">、合理使用生命周期</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   </span><span style="color:#B392F0;">在</span><span style="color:#FFAB70;">\`destroyed\`</span><span style="color:#B392F0;">阶段进行绑定事件或者定时器的销毁</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   </span><span style="color:#B392F0;">使用动态组件的时候通过</span><span style="color:#FFAB70;">\`keep-alive\`</span><span style="color:#B392F0;">包裹进行缓存处理，</span><span style="color:#B392F0;">相关的操作可以在</span><span style="color:#FFAB70;">\`actived\`</span><span style="color:#B392F0;">阶段激活</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F8;">5</span><span style="color:#B392F0;">、数据响应式处理</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   </span><span style="color:#B392F0;">不需要响应式处理的数据可以通过</span><span style="color:#FFAB70;">\`Object.freeze\`</span><span style="color:#B392F0;">处理，</span><span style="color:#B392F0;">或者直接通过</span><span style="color:#FFAB70;">\`this.xxx = xxx\`</span><span style="color:#B392F0;">的方式进行定义</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   </span><span style="color:#B392F0;">需要响应式处理的属性可以通过</span><span style="color:#FFAB70;">\`this.$set\`</span><span style="color:#B392F0;">的方式处理，</span><span style="color:#B392F0;">而不是</span><span style="color:#FFAB70;">\`JSON.parse(JSON.stringify(XXX))\`</span><span style="color:#B392F0;">的方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F8;">6</span><span style="color:#B392F0;">、路由加载方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   页面组件可以采用异步加载的方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F8;">7</span><span style="color:#B392F0;">、插件引入</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   第三方插件可以采用按需加载的方式，</span><span style="color:#B392F0;">比如</span><span style="color:#FFAB70;">\`element-ui\`</span><span style="color:#B392F0;">。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F8;">8</span><span style="color:#B392F0;">、减少代码量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   </span><span style="color:#B392F0;">采用</span><span style="color:#FFAB70;">\`mixin\`</span><span style="color:#B392F0;">的方式抽离公共方法</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   抽离公共组件</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   </span><span style="color:#B392F0;">定义公共方法至公共</span><span style="color:#FFAB70;">\`js\`</span><span style="color:#B392F0;">中</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   </span><span style="color:#B392F0;">抽离公共</span><span style="color:#FFAB70;">\`css\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F8;">9</span><span style="color:#B392F0;">、编译方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   </span><span style="color:#B392F0;">如果线上需要</span><span style="color:#FFAB70;">\`template\`</span><span style="color:#B392F0;">的编译，</span><span style="color:#B392F0;">可以采用完成版</span><span style="color:#FFAB70;">\`vue.esm.js\`</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   </span><span style="color:#B392F0;">如果线上无需</span><span style="color:#FFAB70;">\`template\`</span><span style="color:#B392F0;">的编译，</span><span style="color:#B392F0;">可采用运行时版本</span><span style="color:#FFAB70;">\`vue.runtime.esm.js\`</span><span style="color:#B392F0;">，</span><span style="color:#B392F0;">相比完整版体积要小大约</span><span style="color:#FFAB70;">\`30%\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F8;">10</span><span style="color:#B392F0;">、渲染方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   服务端渲染，</span><span style="color:#B392F0;">如果是需要</span><span style="color:#FFAB70;">\`SEO\`</span><span style="color:#B392F0;">的网站可以采用服务端渲染的方式</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   前端渲染，一些企业内部使用的后端管理系统可以采用前端渲染的方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F8;">11</span><span style="color:#B392F0;">、字体图标的使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">   有些图片图标尽可能使用字体图标</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p>编码阶段</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher</span></span>
<span class="line"><span style="color:#abb2bf;">v-if和v-for不能连用</span></span>
<span class="line"><span style="color:#abb2bf;">如果需要使用v-for给每项元素绑定事件时使用事件代理</span></span>
<span class="line"><span style="color:#abb2bf;">SPA 页面采用keep-alive缓存组件</span></span>
<span class="line"><span style="color:#abb2bf;">在更多的情况下，使用v-if替代v-show</span></span>
<span class="line"><span style="color:#abb2bf;">key保证唯一</span></span>
<span class="line"><span style="color:#abb2bf;">使用路由懒加载、异步组件</span></span>
<span class="line"><span style="color:#abb2bf;">防抖、节流</span></span>
<span class="line"><span style="color:#abb2bf;">第三方模块按需导入</span></span>
<span class="line"><span style="color:#abb2bf;">长列表滚动到可视区域动态加载</span></span>
<span class="line"><span style="color:#abb2bf;">图片懒加载</span></span>
<span class="line"><span style="color:#abb2bf;">SEO优化</span></span>
<span class="line"><span style="color:#abb2bf;">预渲染</span></span>
<span class="line"><span style="color:#abb2bf;">服务端渲染SSR</span></span>
<span class="line"><span style="color:#abb2bf;">打包优化</span></span>
<span class="line"><span style="color:#abb2bf;">压缩代码</span></span>
<span class="line"><span style="color:#abb2bf;">Tree Shaking/Scope Hoisting</span></span>
<span class="line"><span style="color:#abb2bf;">使用cdn加载第三方模块</span></span>
<span class="line"><span style="color:#abb2bf;">多线程打包happypack</span></span>
<span class="line"><span style="color:#abb2bf;">splitChunks抽离公共文件</span></span>
<span class="line"><span style="color:#abb2bf;">sourceMap优化</span></span>
<span class="line"><span style="color:#abb2bf;">用户体验</span></span>
<span class="line"><span style="color:#abb2bf;">骨架屏</span></span>
<span class="line"><span style="color:#abb2bf;">PWA</span></span>
<span class="line"><span style="color:#abb2bf;">还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#b392f0;"></span></span>
<span class="line"><span style="color:#b392f0;">尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher</span></span>
<span class="line"><span style="color:#b392f0;">v-if和v-for不能连用</span></span>
<span class="line"><span style="color:#b392f0;">如果需要使用v-for给每项元素绑定事件时使用事件代理</span></span>
<span class="line"><span style="color:#b392f0;">SPA 页面采用keep-alive缓存组件</span></span>
<span class="line"><span style="color:#b392f0;">在更多的情况下，使用v-if替代v-show</span></span>
<span class="line"><span style="color:#b392f0;">key保证唯一</span></span>
<span class="line"><span style="color:#b392f0;">使用路由懒加载、异步组件</span></span>
<span class="line"><span style="color:#b392f0;">防抖、节流</span></span>
<span class="line"><span style="color:#b392f0;">第三方模块按需导入</span></span>
<span class="line"><span style="color:#b392f0;">长列表滚动到可视区域动态加载</span></span>
<span class="line"><span style="color:#b392f0;">图片懒加载</span></span>
<span class="line"><span style="color:#b392f0;">SEO优化</span></span>
<span class="line"><span style="color:#b392f0;">预渲染</span></span>
<span class="line"><span style="color:#b392f0;">服务端渲染SSR</span></span>
<span class="line"><span style="color:#b392f0;">打包优化</span></span>
<span class="line"><span style="color:#b392f0;">压缩代码</span></span>
<span class="line"><span style="color:#b392f0;">Tree Shaking/Scope Hoisting</span></span>
<span class="line"><span style="color:#b392f0;">使用cdn加载第三方模块</span></span>
<span class="line"><span style="color:#b392f0;">多线程打包happypack</span></span>
<span class="line"><span style="color:#b392f0;">splitChunks抽离公共文件</span></span>
<span class="line"><span style="color:#b392f0;">sourceMap优化</span></span>
<span class="line"><span style="color:#b392f0;">用户体验</span></span>
<span class="line"><span style="color:#b392f0;">骨架屏</span></span>
<span class="line"><span style="color:#b392f0;">PWA</span></span>
<span class="line"><span style="color:#b392f0;">还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等。</span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,3),o=[e];function c(r,t,y,i,F,B){return a(),n("div",null,o)}const u=s(l,[["render",c]]);export{A as __pageData,u as default};
