---
status: 已发布
sort: 13
urlname: notion-example
catalog: 功能和API适配情况
title: Notion 示例文章
date: "2023-04-24 12:14:00"
updated: "2023-04-24 13:56:00"
---

# Notion 示例文章

[Notion 示例文章源地址](https://1874.notion.site/Notion-03ffa8d7ca3d4c94b23b8e6a28b5396e)

# 基本段落

> 书中自有黄金屋，书中自有颜如玉【Quote/引用】

> 💡 生活的意义并不是与他人争高下，而在于享受努力实现目标的过程，结果只是对自己行动的嘉奖。【Callout/标注】

## **将进酒**

李白〔唐代〕

君不见黄河之水天上来，奔流到海不复回。
君不见高堂明镜悲白发，朝如青丝暮成雪。
人生得意须尽欢，莫使金樽空对月。
天生我材必有用，千金散尽还复来。
烹羊宰牛且为乐，会须一饮三百杯。
岑夫子，丹丘生，将进酒，杯莫停。
与君歌一曲，请君为我倾耳听。
钟鼓馔玉不足贵，但愿长醉不愿醒。
古来圣贤皆寂寞，惟有饮者留其名。
陈王昔时宴平乐，斗酒十千恣欢谑。
主人何为言少钱，径须沽取对君酌。
五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。

【Web bookmark/书签】

[bookmark](https://tangly1024.com/)

# 特殊段落

## 1.代码

```bash
# Bash 安装zsh
$ sudo apt install zsh

# 配置ohmyzsh
$ sh -c "$(curl -fsSL <https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh>)"

# 配置ohmyzsh插件
# zsh-autosuggestions
$ git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

# zsh-syntax-highlighting
$ git clone <https://github.com/zsh-users/zsh-syntax-highlighting.git> ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

// 启用插件
$ vim .zshrc
plugins=(git z zsh-autosuggestions zsh-syntax-highlighting)
```

```bash
// Bash
ps -ef | grep java | awk '{print $2}' | xargs kill -9
```

```java
// Java
@Test
public void test11() {

  long start = System.currentTimeMillis();
  int a = 0;
  for(int i=0;i<1000000000;i++){
      try {
          a++;
      }catch (Exception e){
          e.printStackTrace();
      }
  }
  long useTime = System.currentTimeMillis()-start;
  System.out.println("useTime:"+useTime);
}
```

```python
// Python
#!/usr/bin/python3
import json

# Python 字典类型转换为 JSON 对象
data = {
    'no' : 1,
    'name' : 'hello',
    'url' : 'http://tangly1024.com'
}

json_str = json.dumps(data)
print ("Python 原始数据：", repr(data))
print ("JSON 对象：", json_str)
```

```r
# R 语言
#file.edit(path.expand(file.path("~", ".Renviron")))
library(telegram.bot)
library(stringr)
# Initiate the bot session using the token from the enviroment variable.
bot = Bot(token = bot_token('your_bot'))
usr_list <- c(12344566, 12345566)
```

```css
// CSS
html {
  background-color: red;
}
```

```c++
// C++
#include <iostream>
using namespace std;

// main() 是程序开始执行的地方

int main()
{
   cout << "Hello World"; // 输出 Hello World
   return 0;
}
```

```c#
// C#
using System;
namespace HelloWorldApplication
{
   class HelloWorld
   {
      static void Main(string[] args)
      {
         Console.WriteLine("Hello World");
         Console.ReadKey();
      }
   }
}
```

```assembly
// Assembly
.section __TEXT,__text,regular,pure_instructions
.macosx_version_min 10, 13
.globl _add_a_b
.p2align 4, 0x90
_add_a_b: ## @add_a_b
.cfi_startproc
## BB#0:
pushq %rbp
Lcfi0:
.cfi_def_cfa_offset 16
Lcfi1:
.cfi_offset %rbp, -16
movq %rsp, %rbp
Lcfi2:
.cfi_def_cfa_register %rbp
movl %edi, -4(%rbp)
movl %esi, -8(%rbp)
movl -4(%rbp), %esi
addl -8(%rbp), %esi
movl %esi, %eax
popq %rbp
retq
.cfi_endproc

.globl _main
.p2align 4, 0x90
_main: ## @main
.cfi_startproc
## BB#0:
pushq %rbp
Lcfi3:
.cfi_def_cfa_offset 16
Lcfi4:
.cfi_offset %rbp, -16
movq %rsp, %rbp
Lcfi5:
.cfi_def_cfa_register %rbp
subq $16, %rsp
movl $1, %edi
movl $2, %esi
movl $0, -4(%rbp)
callq _add_a_b
addq $16, %rsp
popq %rbp
retq
.cfi_endproc
```

## 2.公式

- 数学公式【Block equation/块级方程】

  ```undefined
  f\left(\left[\frac{1+\{x, y\}}{\left(\frac{x}{y}+\frac{y}{x}\right)(u+1)}+a\right]^{3 / 2}\right)\tag{行标}
  ```

- 行内公式【Inline equation/行级方程】【不可用，解析到一些博客平台会报错，例如 vitepress 会导致页面报错，这里转成图片】

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FtXQORqePi_nzyDWgUerezSuc53F.png)

## 3. 图表

```mermaid
graph LR;
公司架构-->商务
公司架构-->研发
公司架构-->设计
公司架构-->运营
公司架构-->产品
```

## 4. PDF 嵌入

[image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fbdf623f-21ce-48a2-b8b6-152680ad6dfe/tailwindcss.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230424T075526Z&X-Amz-Expires=3600&X-Amz-Signature=6d34e50412cc568374bb280df18a670c03bc69c5a565fb86d2ef2ad0da39fdb7&X-Amz-SignedHeaders=host&x-id=GetObject)

## 5.下载附件

[image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fab11580-96c3-4230-90f6-05257f00fb0a/%E6%B5%8B%E8%AF%95%E5%B5%8C%E5%85%A5PDF.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230424T075526Z&X-Amz-Expires=3600&X-Amz-Signature=1b7abdf68653c23c478958476a80a392c062133a255f4f16b4a7f38f15afb17f&X-Amz-SignedHeaders=host&x-id=GetObject)

## 6. 照片集（Callery 视图数据库）

[照片集](bedb862f-8a0c-4a23-a7b8-93cb1b8bda77)

## 7. 内嵌网页

[embed](https://docs.tangly1024.com/zh)

## 8.代办事项/分栏

绿色背景

- [ ] 洗衣服

- [x] 做饭

红色的字

- [x] 游玩

- [ ] 买衣服

## 9.折叠列表

<details>
  <summary>点击展开【一级】</summary>

<details>
  <summary>点击展开【二级】</summary>

<details>
  <summary>点击展开【三级】</summary>

内容文本

  </details>

  </details>

  </details>

---

## 10.多级列表

- 事物的必然性

1. 事物按规律变化，也有一种不可避免的性质．这种性质就叫做**必然性**
   1. 事物的必然性，是事物本身的性质（我们反对宿命论的是其认为这一切是受神明的支配，而不是反对事物发展中存在的不可避免的性质的事实）
      1. 第三级别列表
      2. 第三级别列表
   2. 其决定于它自己本身发展的情况和周围的条件
      1. 第三级别列表
         1. 第三级别列表

### 11.表格

| 表格标题 | 备注   |
| -------- | ------ |
| 标题 1   | 备注 1 |
| 标题 2   | 备注 2 |

### 12.图片

![](https://blogimagesrep-1257180516.cos.ap-guangzhou.myqcloud.com/elog-docs-images/FlZGA7Owpp0UiR8KPK_Q81yeMANd.png)

### 13. Emoji

- 🕜
- 💣
- 👨‍👩‍👧‍👦

### 14.超链接

[https 超链接](https://1874.cool)

[非 http 链接](/notion/start)
