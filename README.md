# hexo-ZXD
***
## 版本0.1

> hexo-ZXD第一个版本发布了...


> 新版本发布，最希望的事情是大家能说说对 hexo-ZXD的建议，您在 github提交的任何 issues和 pull request我都会积极处理。期待您的 pull request~~~



<!--more-->

<br>
<br>   
### hexo-ZXD 采用响应式设计，在手机，平板，PC上都有响应式的变化。
PC
![markdown](http://zhuxudong.cn/img/markdown-1.png)
平板
![markdown](http://zhuxudong.cn/img/markdown-2.png)
手机
![markdown](http://zhuxudong.cn/img/markdown-3.png)  ![markdown](http://zhuxudong.cn/img/markdown-4.png)
### hexo-ZXD的完整front-matter
* layout	布局，一般不用设置，默认post布局
* title	标题，这个必须设置，会影响header和index的显示	
* date	建立日期	归档处将由这个时间顺序排序
* updated	更新日期	开启后，article-meta将会显示创建日期和更新日期
* tags	标签，可以是数组	
* categories	分类，可以是数组,不介意开启，这个功能和tags是差不多的
* photos 照片路径，可以是数组
* comments	决定当前页面是否开启评论功能	需要开启设置为true

### hexo-ZXD的markdown样式
[参考上一篇测试文章](http://zhuxudong.cn/2017/01/03/test/)

### 下载hexo-ZXD
* [git clone https://github.com/zhuxudong/hexo-ZXD](https://github.com/zhuxudong/hexo-ZXD)

### 搭建环境
* 下载完hexo-ZXD，您还需要搭建node环境，因为hexo是用javascript写的，需要运行在Node上面，具体的hexo搭建过程，请参考[hexo官网](//hexo.io);
* 如果您不需要定制别的功能，只需要简单hexo n 便可创建文章，hexo g,hexo d发布到github.
* 如果您想定制，hexo-ZXD使用scss和ejs编写，需要依赖的npm包我给贴下来了，粘贴到package.json中，运行npm install即可
	

	"dependencies": {
    	"hexo": "^3.2.2",
    	"hexo-deployer-git": "^0.2.0",
    	"hexo-generator-archive": "^0.1.4",
    	"hexo-generator-category": "^0.1.3",
    	"hexo-generator-index": "^0.2.0",
    	"hexo-generator-tag": "^0.2.0",
    	"hexo-renderer-ejs": "^0.2.0",
    	"hexo-renderer-marked": "^0.2.10",
    	"hexo-renderer-sass": "^0.2.0",
    	"hexo-server": "^0.2.0"
  	}


### [期待您的加入 ->>](https://github.com/zhuxudong/hexo-ZXD)
>  期待您的fork，接受任何形式的pull request和issues

### 如果你也喜欢hexo-ZXD的话，记得给hexo-ZXD一个[star](https://github.com/zhuxudong/hexo-ZXD)哦~~
