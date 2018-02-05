webpackJsonp([26986248059497],{401:function(n,s){n.exports={data:{markdownRemark:{id:"/Users/macbookpro/Desktop/work/g-blog/content/posts/2017-12-16--peixun-2/index.md absPath of file >>> MarkdownRemark",html:'<h2>dva框架之数据调用</h2>\n<h3>route</h3>\n<p>route负责页面渲染和数据展示</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">//基础模板</span>\n<span class="token comment">// routes/admin/index.js</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dva\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Index</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span> hello world <span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>router.js负责全部路由的管理</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">//引入</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dva/router\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> IndexPage <span class="token keyword">from</span> <span class="token string">\'./routes/IndexPage\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Index <span class="token keyword">from</span> <span class="token string">\'./routes/admin/Index\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">RouterConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span> history <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>Router history<span class="token operator">=</span><span class="token punctuation">{</span>history<span class="token punctuation">}</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>Switch<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> exact component<span class="token operator">=</span><span class="token punctuation">{</span>IndexPage<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/admin"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Index<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> RouterConfig<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>antd是一款ui框架，想象成bootstrap,它将常用的东西封装成组件提供使用</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">//布局</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Sider<span class="token punctuation">,</span> Content <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>路由嵌套</p>\n<p>react-route v4 规定路由不允许嵌套</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// V2 or V3 路由组件嵌套</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> hashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">&lt;</span>Router history<span class="token operator">=</span><span class="token punctuation">{</span>hashHistory<span class="token punctuation">}</span><span class="token operator">></span>\n  <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">\'/\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>App<span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">\'foo\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Foo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">\'bar\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Bar<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span>\n<span class="token comment">// V4 Router 的路由组件嵌套</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n    HashRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span>\n    Route<span class="token punctuation">,</span>\n    Switch\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">&lt;</span>Router<span class="token operator">></span>\n <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> component<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>App <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>Switch<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">\'/foo\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Foo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">\'/bar\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Bar<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>App<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span>\n</code></pre>\n      </div>\n<p>hashHistory</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// 以前</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>hashHistory<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> history <span class="token operator">=</span> hashHistory<span class="token punctuation">;</span>\n\n<span class="token comment">// now</span>\n<span class="token keyword">import</span> createHashHistory <span class="token keyword">from</span> <span class="token string">\'history/createBrowserHistory\'</span>\n<span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token function">createHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//dva中修改history</span>\n<span class="token keyword">import</span> browserHistory <span class="token keyword">from</span> <span class="token string">\'history/createBrowserHistory\'</span><span class="token punctuation">;</span>\n<span class="token comment">// 1. Initialize</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">dva</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  history<span class="token punctuation">:</span> <span class="token function">browserHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>service</h3>\n<p>service负责的是数据的请求</p>\n<p>request函数是一个封装的fetch函数</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getrandom</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">\'/article/random?dev=1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getoneday</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`/article/day?dev=1&amp;date=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>param<span class="token punctuation">.</span>date<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>model</h3>\n<p>model层负责的是数据的处理</p>\n<p>call是请求接口，put是进行数据存取</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token operator">*</span><span class="token function">getRandom</span><span class="token punctuation">(</span><span class="token punctuation">{</span> payload <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> call<span class="token punctuation">,</span> put <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">try</span> <span class="token punctuation">{</span>\n     <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>example<span class="token punctuation">.</span>getrandom<span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n       <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'save\'</span><span class="token punctuation">,</span> payload<span class="token punctuation">:</span> <span class="token punctuation">{</span> random<span class="token punctuation">:</span> data <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n       message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">\'random error\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token punctuation">}</span>\n   <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<h3>proxy配置</h3>\n<p>进行代理请求\n<a href="https://interface.meiriyiwen.com/article/day?dev=1">https://interface.meiriyiwen.com/article/day?dev=1</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token string">"proxy"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token string">"/article"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">"target"</span><span class="token punctuation">:</span> <span class="token string">"https://interface.meiriyiwen.com"</span><span class="token punctuation">,</span>\n        <span class="token string">"changeOrigin"</span><span class="token punctuation">:</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<h3>可能遇到的问题</h3>\n<ul>\n<li>\n<p>嵌套路由刷新不生效</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// public/index.html</span>\n<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"index.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n<span class="token comment">// 改成</span>\n<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"/index.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n</code></pre>\n      </div>\n</li>\n<li>JSON格式出错，尽量不要复制，手打一遍</li>\n<li>\n<p>数据获取不到（多看请求）</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// 对象析构，因为这里获取的数据是{data:{..,..,..}},所以才是const { data }将其析构出来，不要被误导全都是用{ data }析构 </span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>example<span class="token punctuation">.</span>getArticle<span class="token punctuation">,</span> payload<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n</li>\n</ul>',frontmatter:{title:"实习生培训--Dva框架数据调用",subTitle:"公司用Dva框架进行前端开发，Dva是基于redux,redux-saga和react-router的框架，简单容易上手。",date:"December 16, 2017",cover:{childImageSharp:{resize:{src:"/static/dva2-16240c75647cc8031da31e796f992739-160fa.png"}}}}}},pathContext:{path:"/peixun-dva/"}}}});
//# sourceMappingURL=path---peixun-dva-99ba87b3409737079399.js.map