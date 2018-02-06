webpackJsonp([0xa6c5a3c8d01d],{397:function(n,a){n.exports={data:{markdownRemark:{id:"/Users/macbookpro/Desktop/work/g-blog/content/posts/2017-12-23-gatsby/index.md absPath of file >>> MarkdownRemark",html:'<blockquote>\n<p>首先，gatsby属于比较新的东西，有学习的冲动。其次，gatsby是一个基于react的静态网站生成器，本人工作之初使用的技术栈也是react，因此使用其生态相关的方面也有益于成长。</p>\n</blockquote>\n<h2>如何一步步搭建gatsby的个人博客</h2>\n<h3>搭建环境</h3>\n<p>首先安装gatsby的脚手架</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>npm install <span class="token operator">-</span>g gatsby<span class="token operator">-</span>cli\n</code></pre>\n      </div>\n<p>然后一键生成目录结构并运行</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>gatsby <span class="token keyword">new</span> <span class="token punctuation">[</span>project name<span class="token punctuation">]</span>\ncd project\ngatsby develop\n</code></pre>\n      </div>\n<p>现在你应该能看到下面的效果证明你的启动成功了</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/gatsby-index-afbd919fcabacecbd48a362118b22f17-271f0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.7730294396961%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAA7ElEQVQ4y+WQvU4CQRSF53XwSSjpSaSBxgeworQxSGIitY0FJtJoQWsJCUKwRui2WWYT9meW7IbMx87KZgUL3Y2dJ/mKO+fOuXdGNM56GM4rPS6rD1zVB7Rr/aS+o1H59IogOq0XbhI6zWfu2688dcc8Xo+4vRimZ8YvguCLVssV89k7b5Mpi48FZSS01hiMpJRYlpVi2zZKKeI4Tr2s7ydEXkAYKnzfxfM83M0GRzpEUVQu0Mhzt8h1QOCHqCBIBoRw8LKeXz45vZKEgLPW7HbHTbpAqDBBhiw0r3NKbKi//VORkJMN/1b/MHAPH0DH7fRgykEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="gatsby"\n        title=""\n        src="/static/gatsby-index-afbd919fcabacecbd48a362118b22f17-42603.png"\n        srcset="/static/gatsby-index-afbd919fcabacecbd48a362118b22f17-f931c.png 200w,\n/static/gatsby-index-afbd919fcabacecbd48a362118b22f17-e8031.png 400w,\n/static/gatsby-index-afbd919fcabacecbd48a362118b22f17-42603.png 800w,\n/static/gatsby-index-afbd919fcabacecbd48a362118b22f17-271f0.png 1053w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>使用别人的模板</h3>\n<p>你可以从gatsby官网中学习如何从零搭建一个blog,今天我们讲个快的方式—使用别人的模版。</p>\n<p>比如你想使用我这个网站的模板，你需要的步骤如下：</p>\n<ul>\n<li>\n<p>第一种方法：</p>\n<ul>\n<li>git clone <a href="https://github.com/xypisces/Blog">https://github.com/xypisces/Blog</a></li>\n<li>npm i</li>\n<li>gatsby develop</li>\n</ul>\n</li>\n<li>\n<p>第二种方法：</p>\n<ul>\n<li>gatsby new [project name] git@github.com:xypisces/Blog.git</li>\n<li>gatsby develop</li>\n</ul>\n</li>\n</ul>\n<p>两种方法的前提你都要安装前面的脚手架，mac下的基本没出现问题，windows下会出现点问题，比如什么vs要升级到2005什么的，自行google解决，我就默认你启动成功啦</p>\n<h3>自定义修改样式</h3>\n<p>好了，现在你已经启动成功拥有这个项目，接下来可以为所欲为了。比如说我想这个背景颜色不好看想改，想加个搜索功能什么的。。</p>\n<p>如果你有react基础的话，看下代码应该能够轻松修改。如果没有的话，我来简单介绍一下配置</p>\n<p><code>posts</code>文件下就是具体文章的内容啦，我已经放下一些样例文章提供参考啦</p>\n<p>如果你要修改颜色的话，可以对应找这个文件<code>src/styles/colors.js</code>文件中修改。\n然后在同层目录下<code>theme.js</code>中进行颜色的配置。</p>\n<p>具体到页面结构的话<code>src/components</code>文件夹下具体看，命名已经很语义了哦。</p>\n<h3>发布到github pages</h3>\n<p>最后一步，发布到线上。如果你没有发布过github pages的话，建议去github官网中查看其文档使用，5分钟搞定，这里默认你成功建立一个自己的github pages。那么下面你只需要做：</p>\n<ul>\n<li>\n<p>第一步</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>npm i gh<span class="token operator">-</span>pages <span class="token operator">--</span>save<span class="token operator">-</span>dev\n<span class="token comment">//然后在package.json的scripts中加上</span>\n<span class="token string">"scripts"</span><span class="token punctuation">:</span><span class="token punctuation">{</span>\n<span class="token operator">...</span><span class="token punctuation">,</span>\n<span class="token string">"deploy"</span><span class="token punctuation">:</span> <span class="token string">"gatsby build --prefix-paths &amp;&amp; gh-pages -d public"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>第二步</li>\n</ul>\n<p>在gatsby.config.js中设置的你项目地址，</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  pathPrefix<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`/project-name`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这里面的project-name是这你的<code>https://github.com/username/project-name</code>中的<code>project-name</code>,如果你的访问地址是<code>username.github.io</code>的话，就直接是设置成<code>pathPrefix:\'/\'</code>即可。</p>\n<ul>\n<li>第三步</li>\n</ul>\n<p><code>git remote -v</code>检查是否项目有链接到你线上地址中，如果没有的话，\n首先<code>git init</code>,然后<code>git remote add origin git@github.com:username/project-name.git</code>. 最后运行<code>npm run deploy</code>即可。等几分钟你就能在线上看到你项目啦（如果没有请去项目地址查看，可能在另一分支上面，只是你需要合并一下就可以啦！）</p>\n<h3>总结</h3>\n<p>gatsby搭建blog和用hexo搭建blog的方法其实大同小异，而基于react,也方便了它的扩展性，总的来说还是推荐大家去使用一下的哦。</p>',frontmatter:{title:"用gatsby搭建个人博客站点",subTitle:"Gatsby lets you build blazing-fast sites with your data, whatever the source. Liberate your sites from legacy CMSs and fly into the future.",date:"December 23, 2017",cover:{childImageSharp:{resize:{src:"/static/gatsby-8c50e13ea6ec4d8adc7f68a2637037cc-ada8c.jpeg"}}}}}},pathContext:{path:"/gatsby/"}}}});
//# sourceMappingURL=path---gatsby-deb9364b9c5979194aac.js.map