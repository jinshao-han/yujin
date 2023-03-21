### Webpack代理服务器

如果是开发时导致的跨域，最好的解决方法是设置代理服务器。现代开发基于Webpack

我们先简单提及一下`webpack-dev-server`这个插件的原理，本地启动了一个**使用express的Http服务器**

并监听一个端口，这个本地服务器与客户端采用websocket通信协议，当原始文件发生改变，webpack-dev-server会实时编译。上线是请求实际的服务器，开发时是请求本地的服务器。

服务器不仅可以提供热更新的功能，**还可以充当代理服务器**

```js
module.exports = {
  //...
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.baidu.com/',
        changeOrigin: true,     // target是域名的话，需要这个参数，
        pathRewrite: {'^/api' : ''}
      },
      '/api2': {
          .....
      }
    }
  }
};
```

-   '/api'和pathRewrite

    `'/api'`是捕获API的标志，如果API中有这个字符串，那么就开始匹配代理，比如API请求`/api/users`, 会被代理到请求 [www.baidu.com/api/users](https://link.juejin.cn?target=http%3A%2F%2Fwww.baidu.com%2Fapi%2Fusers "http://www.baidu.com/api/users") 。

    `pathRewrite`作用是把路径重写，也就是说会修改最终请求的API路径。比如访问的刚刚未设置`pathRewrite`的API路径：`http://www.baidu.com/api/users`,设置`pathRewrite: {'^/api' : ''},`后，最终代理访问的路径：`http://www.baidu.com/users`，这个参数的目的是给代理命名后，在访问时把命名删除掉。

-   target和changeOrigin

    代理的API地址，就是需要跨域的API地址。地址可以是域名,如：`http://www.baidu.com`，也可以是IP地址：`http://127.0.0.1:3000`。如果是域名需要额外添加一个参数`changeOrigin: true`，否则会代理失败。
    
    
Set-Cookie失效问题

-   后台判断开发环境进行设置

-   更改根地址，加上`content`

-   暴力处理Set-Cookie字段

    上面的proxy设置中有 `option.cookiePathRewrite`和`option.cookieDomainRewrite`的选项，作用是重写Set-Cookie中的path和domain条件，还有一种更为暴力的方法，`proxy`可以直接对返回头进行处理
