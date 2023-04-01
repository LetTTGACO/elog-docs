# 语雀-Markdown

### 汇总

| 分类         | 功能点                                                       | 可用状态 | 接口返回                                                                                                                                 | 语雀预览                                                                                                                       | Hexo 预览                                                                                                                                                                                    | 解决办法                                                             |
| ------------ | ------------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 基础         | 图片                                                         | 可用     | 图片链接                                                                                                                                 |                                                                                                                                |                                                                                                                                                                                              |                                                                      |
|              | 表格                                                         | 可用     | 表格                                                                                                                                     |                                                                                                                                |                                                                                                                                                                                              |                                                                      |
|              | 附件                                                         | 勉强可用 | 超链接                                                                                                                                   | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fo7YgaIGfx1SRRlQ93YMQbU_j2zr.png) | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FraRMVY6VkCkqiOaM0d9U1YTnA-Y.png)                                                               |                                                                      |
|              | 状态                                                         | 不可用   | 纯文字                                                                                                                                   | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FhUeLf3DgZfTW4VywvO4MoVn8_8-.png) | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FqtkmqwX0zXfjhwA1YQDqF61NPwU.png)                                                               |                                                                      |
| 画板类       | 画板/思维导图/流程图                                         | 不可用   | 无                                                                                                                                       | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fo_CaGZT67ia9e9lvGgk7nrebAqx.png) |                                                                                                                                                                                              | 画好之后截图为图片粘贴在画板下面。缺点就是每次更改都需要重新截图粘贴 |
| 数据表       | 数据表/画册/看板                                             | 不可用   | 无                                                                                                                                       | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FktVKsPNRDOFGwwMcD_sNBZ9gFRK.png) |                                                                                                                                                                                              |                                                                      |
| 程序员专区   | 代码块                                                       | 可用     | 代码块                                                                                                                                   |                                                                                                                                |                                                                                                                                                                                              |                                                                      |
|              | 公式                                                         | 可用     | 图片链接                                                                                                                                 | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fqc1hs9o_MmB53sMR9smwauMjCUp.png) | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fqv9tKFhKopwmtPMztSpOcERLfaI.png)                                                               |                                                                      |
|              | UML 图                                                       | 不可用   | 无                                                                                                                                       | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fqdq4K43TscKTp6B-JQr23laYfkk.png) |                                                                                                                                                                                              | 画好之后截图为图片粘贴在画板下面。缺点就是每次更改都需要重新截图粘贴 |
|              | 文本绘图                                                     | 可用     | 图片链接                                                                                                                                 | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FhoGPaN3tnw3zyHBf3pvoLIv7UEo.png) | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fpwt8vKc4pfshELSnvsZmf68Vp0D.png)                                                               |                                                                      |
| 布局和样式   | 高亮块                                                       | 可用     | `:::info`开头的高亮块                                                                                                                    | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FjF-o-QKaC14tT2IdD4ahm0ZcTo-.png) | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FsQMKIeb5xn6ZqcJvGeBS5ZZTvTR.png)                                                               |                                                                      |
|              | 折叠块                                                       | 不可用   | 返回折叠标题+折叠内容字符                                                                                                                | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FiQ6DgmcyXaPDaWJ36ykkpwp7Poz.png) | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FvUyJmhUqQUZjxAEWjukLrsPcryO.png)                                                               |                                                                      |
|              | 分栏卡片                                                     | 不可用   | 依次返回每个分栏的内容                                                                                                                   | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FvXphYWJqy4ylTMDuoBE1hTnwEwx.png) | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fu4KYcMF8yVxP81VJvRcDuj6avVl.png)                                                               |                                                                      |
|              | 引用                                                         | 可用     | 引用块                                                                                                                                   | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fg6KOVdWFoqnyuw2Yo4tS47PgHKZ.png) | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FtmdSgxktq9gJfcrlHeUQydHJsib.png)                                                               |                                                                      |
|              | 分割线                                                       | 可用     | 分割线                                                                                                                                   |                                                                                                                                |                                                                                                                                                                                              |                                                                      |
|              | 表情                                                         | 可用     | 表情                                                                                                                                     |                                                                                                                                |                                                                                                                                                                                              |                                                                      |
|              | 图册                                                         | 不可用   | 无                                                                                                                                       | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FkUrOTfHhLe7BpnFOiYtTN5WNZJ7.png) |                                                                                                                                                                                              |                                                                      |
| 小工具       | 提及                                                         | 勉强可用 | 超链接                                                                                                                                   | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FiwPqIp30y18Y2vU1Yx5pcGN3LsD.png) | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FjIugJJcAKh720XSZV7e5QOfS45j.png)                                                               |                                                                      |
|              | 语雀内容                                                     | 勉强可用 | 超链接                                                                                                                                   | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FpyJYooLV6yeAE5JrpW9u4MbbB-j.png) | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Flbr6pxnVaRolPjWJ9qBovdU0AMi.png)                                                               |                                                                      |
|              | 日历/投票/打卡/加密文本                                      | 不可用   | 无                                                                                                                                       | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FjuAQEQKf71MzJHe1E1CGzerCAw5.png) |                                                                                                                                                                                              |                                                                      |
| 嵌入本地内容 | 本地文件                                                     | 勉强可用 | 超链接                                                                                                                                   | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FsCKUbOJ3jvK9ytVDbLMGPZL5MAt.png) | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Ft6cDycdpazKd0Lei0MN3BuF3aDG.png)                                                               |                                                                      |
|              | 本地音频                                                     | 不可用   | 无                                                                                                                                       | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FlMyo7UVAfJ6FIMZ-AOOu7Sudqfh.png) |                                                                                                                                                                                              |                                                                      |
|              | 本地视频                                                     | 勉强可用 | 视频超链接![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FlXanXhSfjSJb3mcEYrT7pcFvw3b.png) | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FtUskmvbrYgg2lH3h05qYxnzhhMR.png) | 虽然能成功返回，但预览图异常，点击后跳转当前文档的所在语雀文档![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FsU2IDURNRurkkVjEtZRi2BCy6wQ.png) |                                                                      |
| 第三方服务   | 优酷/B 站/网易云/淘宝/ProcessOn/Figma/Canva/CodePen/码上掘金 | 勉强可用 | 超链接                                                                                                                                   | ![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fn7ik9CSnFsHurPssoN7rsN2kX9y.png) | 点击后前往目标页面![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fn6A2f_K9B1GkKaZzumVOMiPoPRS.png)                                             |                                                                      |

### 基础

- [x] 图片
- [x] 表格

勉强可用附件
![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/Fp2z10MvtawsU5_ddjwZwB-nvYh4.png)
接口返回为超链接形式，在 hexo 中展现形式为超链接，点击后触发下载
不可用状态
![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FgRXs_FYNLAz17qKmW6NE4CyH_Vn.png)
接口返回为纯文字，在 hexo 中不支持，会直接渲染为文字

### 行内样式

可用加粗
可用下划线
可用斜体
可用中划线
上/下标
可用行内代码
不可用字体颜色
不可用字体背景色
待办事项

### 画板类

不可用画板
不可用思维导图
不可用流程图
接口不返回，解决方案就是画好之后截图放在画板下面，缺点就是每次更改都需要重新截图粘贴

### 数据表

不可用数据表
不可用画册
不可用看板
接口不返回，解决方案就是画好之后截图放在画板下面，缺点就是每次更改都需要重新截图粘贴

### 程序员专区

- [x] 代码块
- [x] 公式

接口返回为图片
不可用 UML 图
接口不返回，解决方案就是画好之后截图放在画板下面，缺点就是每次更改都需要重新截图粘贴

- [x] 文本绘图

接口返回为图片

### 布局和样式

- [x] 高亮块

接口返回为`:::info`形式，hexo 中正确渲染
不可用折叠块
接口直接返回折叠标题+折叠内容字符
不可用分栏卡片
接口依次返回每个分栏的内容

- [x] 引用
- [x] 分割线
- [x] 表情

不可用图册
接口不返回，无交互

### 小工具

勉强可用提及
接口返回为超链接
勉强可用语雀内容
接口返回为超链接
不可用日历
不可用投票
不可用打卡
不可用加密文本
以上接口不返回内容

### 嵌入本地内容

勉强可用本地文件 PDF Word Sketch 等
接口返回为超链接
不可用本地音频
接口不返回
不可用本地视频
![image.png](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FgSXIMrkmP8hgyOXgKzPe5V6iSfP.png)
接口返回为视频超链接形式`[![46_1677164223.mp4 (139.39KB)](https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*NNs6TKOR3isAAAAAAAAAAABkARQnAQ)](https://www.yuque.com/1874w/elog-yuque-demo/snn15ow2bffb7o3o?_lake_card=%7B%22status%22%3A%22done%22%2C%22name%22%3A%2246_1677164223.mp4%22%2C%22size%22%3A142733%2C%22taskId%22%3A%22ucf50b322-2e8f-4f86-9c03-a6fbc24de1f%22%2C%22taskType%22%3A%22upload%22%2C%22url%22%3Anull%2C%22cover%22%3Anull%2C%22videoId%22%3A%22inputs%2Fprod%2Fyuque%2F2023%2F417081%2Fmp4%2F1677164249140-0d3664bb-e160-4855-a991-c3f63ced0d66.mp4%22%2C%22download%22%3Afalse%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22zSBKg%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%2C%22card%22%3A%22video%22%7D#zSBKg)`，预览图异常，点击后跳转当前文档的所在语雀文档

### 第三方服务

勉强可用优酷
勉强可用 B 站
勉强可用网易云
勉强可用淘宝
勉强可用 Figma
勉强可用 ProcessOn
勉强可用 Canva
勉强可用 CodePen
勉强可用码上掘金
所有嵌入的第三方服务，接口返回形式都为超链接，点击后前往目标页面
