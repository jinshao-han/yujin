import{_ as s,c as n,o as a,a as l}from"./app.a78b92bc.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Git 分支操作（创建、删除、合并分支）","slug":"git-分支操作-创建、删除、合并分支","link":"#git-分支操作-创建、删除、合并分支","children":[]}],"relativePath":"Git/Git分支操作.md","lastUpdated":1679387290000}'),e={name:"Git/Git分支操作.md"},p=l(`<h3 id="git-分支操作-创建、删除、合并分支" tabindex="-1">Git 分支操作（创建、删除、合并分支） <a class="header-anchor" href="#git-分支操作-创建、删除、合并分支" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">git branch                    //查看所有分支</span></span>
<span class="line"><span style="color:#abb2bf;">git branch &lt;name&gt;             //创建分支</span></span>
<span class="line"><span style="color:#abb2bf;">git checkout &lt;name&gt;           //切换分支</span></span>
<span class="line"><span style="color:#abb2bf;">git checkout -b &lt;name&gt;        //创建并切换分支</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">git branch -d &lt;name&gt;          //删除分支，无法删除未被合并的分支</span></span>
<span class="line"><span style="color:#abb2bf;">git branch -D &lt;name&gt;          //强制删除分支，可以删除未被合并的分支</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">git merge &lt;branch&gt;             //将branch分支合并到当前分支，当前分支拥有branch分支的记录，branch分支不变</span></span>
<span class="line"><span style="color:#abb2bf;">git merge &lt;branch1&gt; &lt;branch2&gt;  //将分支branch1合并到branch2</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#b392f0;">git branch                    //查看所有分支</span></span>
<span class="line"><span style="color:#b392f0;">git branch &lt;name&gt;             //创建分支</span></span>
<span class="line"><span style="color:#b392f0;">git checkout &lt;name&gt;           //切换分支</span></span>
<span class="line"><span style="color:#b392f0;">git checkout -b &lt;name&gt;        //创建并切换分支</span></span>
<span class="line"><span style="color:#b392f0;"></span></span>
<span class="line"><span style="color:#b392f0;">git branch -d &lt;name&gt;          //删除分支，无法删除未被合并的分支</span></span>
<span class="line"><span style="color:#b392f0;">git branch -D &lt;name&gt;          //强制删除分支，可以删除未被合并的分支</span></span>
<span class="line"><span style="color:#b392f0;"></span></span>
<span class="line"><span style="color:#b392f0;">git merge &lt;branch&gt;             //将branch分支合并到当前分支，当前分支拥有branch分支的记录，branch分支不变</span></span>
<span class="line"><span style="color:#b392f0;">git merge &lt;branch1&gt; &lt;branch2&gt;  //将分支branch1合并到branch2</span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>git 查看状态或记录</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">git status //  查看当前状态</span></span>
<span class="line"><span style="color:#abb2bf;">git log  //显示当前分支的commit记录</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#b392f0;">git status //  查看当前状态</span></span>
<span class="line"><span style="color:#b392f0;">git log  //显示当前分支的commit记录</span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>回退</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">/*将HEAD移动到commit id对应的提交点*/</span></span>
<span class="line"><span style="color:#abb2bf;">git reset &lt;commit id&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">/*工作区、暂存区和历史记录区都会被重置commit id提交点*/</span></span>
<span class="line"><span style="color:#abb2bf;">git reset --hard &lt;commit id&gt;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#b392f0;">/*将HEAD移动到commit id对应的提交点*/</span></span>
<span class="line"><span style="color:#b392f0;">git reset &lt;commit id&gt;</span></span>
<span class="line"><span style="color:#b392f0;">/*工作区、暂存区和历史记录区都会被重置commit id提交点*/</span></span>
<span class="line"><span style="color:#b392f0;">git reset --hard &lt;commit id&gt;</span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,6),t=[p];function c(i,r,o,b,d,m){return a(),n("div",null,t)}const u=s(e,[["render",c]]);export{h as __pageData,u as default};
