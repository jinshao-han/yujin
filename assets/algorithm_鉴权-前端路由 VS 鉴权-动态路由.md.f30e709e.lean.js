import{_ as a,c as l,o,b as e,d as t}from"./app.876eb61b.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"鉴权-前端路由 VS 鉴权-动态路由","slug":"鉴权-前端路由-vs-鉴权-动态路由","link":"#鉴权-前端路由-vs-鉴权-动态路由","children":[]},{"level":3,"title":"实现思路","slug":"实现思路","link":"#实现思路","children":[]}],"relativePath":"algorithm/鉴权-前端路由 VS 鉴权-动态路由.md","lastUpdated":1679387290000}'),s={name:"algorithm/鉴权-前端路由 VS 鉴权-动态路由.md"},_=e("h3",{id:"鉴权-前端路由-vs-鉴权-动态路由",tabindex:"-1"},[t("鉴权-前端路由 VS 鉴权-动态路由 "),e("a",{class:"header-anchor",href:"#鉴权-前端路由-vs-鉴权-动态路由","aria-hidden":"true"},"#")],-1),n=e("h3",{id:"实现思路",tabindex:"-1"},[t("实现思路 "),e("a",{class:"header-anchor",href:"#实现思路","aria-hidden":"true"},"#")],-1),r=e("ol",null,[e("li",null,"路由跳转 先判断是否登录 未登录只能访问白名单页面,访问其他页面全部重定向到登录页面"),e("li",null,"登录行为触发,获取动态路由,递归解析动态路由信息,并且 addRouter,同时存储到 Vuex,并且记录获取路由的状态"),e("li",null,"跳转页面不会获取动态路由,刷新页面重新获取动态路由")],-1),i=e("p",null,"相比较之前使用 localStorage 存储登录状态,现在把登录状态交给 cookice 进行管理",-1),d=e("p",null,"路由信息全部交给 Vuex 进行管理,不再从 localStorage 里面走,增加了系统的稳定性",-1),c=[_,n,r,i,d];function h(u,p,m,f,V,v){return o(),l("div",null,c)}const g=a(s,[["render",h]]);export{S as __pageData,g as default};
