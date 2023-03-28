import{_ as e,c as a,o as t,a as r}from"./app.7c7a7466.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"AST是什么","slug":"ast是什么","link":"#ast是什么","children":[]},{"level":3,"title":"AST 作用","slug":"ast-作用","link":"#ast-作用","children":[]},{"level":3,"title":"AST 如何生成","slug":"ast-如何生成","link":"#ast-如何生成","children":[]},{"level":3,"title":"词法分析","slug":"词法分析","link":"#词法分析","children":[]},{"level":3,"title":"语法分析","slug":"语法分析","link":"#语法分析","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"algorithm/AST.md","lastUpdated":null}'),s={name:"algorithm/AST.md"},i=r('<h3 id="ast是什么" tabindex="-1">AST是什么 <a class="header-anchor" href="#ast是什么" aria-hidden="true">#</a></h3><p>抽象语法树，简称AST ，他是源代码语法结构的一种抽象表示，它以树状的形式变现编程语言的语法结构，树上每个节点都表示源代码中的一种结构</p><p>如果你查看目前任何主流的项目中的devDependencies，会发现前些年的不计其数的插件诞生。我们归纳一下有：javascript转译、代码压缩、css预处理器、elint、pretiier，等。有很多js模块我们不会在生产环境用到，但是它们在我们的开发过程中充当着重要的角色。所有的上述工具，不管怎样，都建立在了AST这个巨人的肩膀上。</p><h3 id="ast-作用" tabindex="-1">AST 作用 <a class="header-anchor" href="#ast-作用" aria-hidden="true">#</a></h3><p>编辑器的错误提示、代码格式化、代码高亮、代码自动补全； elint、pretiier 对代码错误或风格的检查； webpack 通过 babel 转译 javascript 语法；</p><h3 id="ast-如何生成" tabindex="-1">AST 如何生成 <a class="header-anchor" href="#ast-如何生成" aria-hidden="true">#</a></h3><p>js执行的第一步是读取js文件中的字符流，然后通过词法分析生成token，之后再通过语法分析生成AST，最后生成机器码执行</p><p>整个分析过程主要分为两个步骤 分词: 将整个代码字符串分割成最小语法单元数组 语法分析：在分词基础上建立分析语法单元之间的关系</p><p>Js Parser 是js语法解析器，它可以将js源码转成 AST ，常见的parser 有 esprima、traceur、acorn、shift等</p><h3 id="词法分析" tabindex="-1">词法分析 <a class="header-anchor" href="#词法分析" aria-hidden="true">#</a></h3><p>词法分析，也称之为扫描（scanner），简单来说就是调用 next() 方法，一个一个字母的来读取字符，然后与定义好的 JavaScript 关键字符做比较，生成对应的Token。Token 是一个不可分割的最小单元:</p><p>例如 var 这三个字符，它只能作为一个整体，语义上不能再被分解，因此它是一个 Token。</p><p>词法分析器里，每个关键字是一个 Token ，每个标识符是一个 Token，每个操作符是一个 Token，每个标点符号也都是一个 Token。除此之外，还会过滤掉源程序中的注释和空白字符（换行符、空格、制表符等。</p><p>最终，整个代码将被分割进一个tokens列表（或者说一维数组）。</p><h3 id="语法分析" tabindex="-1">语法分析 <a class="header-anchor" href="#语法分析" aria-hidden="true">#</a></h3><p>语法分析会将词法分析出来的 Token 转化成有语法含义的抽象语法树结构。同时，验证语法，语法如果有错的话，抛出语法错误。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h3><p>为了兼容低版本浏览器 我们也通常会使用 webpack 打包编译我们的代码将 ES6 语法降低版本，比如箭头函数变成普通函数。将 const、let 声明改成 var 等等，他都是通过 AST 来完成的，只不过实现的过程比较复杂，精致。不过也都是这三板斧：</p><p>js 语法解析成 AST； 修改 AST； AST 转成 js 语法；</p>',19),n=[i];function l(d,h,c,p,o,T){return t(),a("div",null,n)}const k=e(s,[["render",l]]);export{S as __pageData,k as default};