# think

## 声明

1. 请先阅读[提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)
2. 如果希望参与独立编辑器开发，可以到[这个仓库](https://github.com/ZhongxuYang/sailkit)参与
3. 由于服务器成本和免费的 SSL 证书也没了，网站不定期会挂，敬请谅解

## 简介

Think 是一款开源知识管理工具。通过独立的知识库空间，结构化地组织在线协作文档，实现知识的积累与沉淀，促进知识的复用与流通。同时支持多人协作文档。使用的技术如下：

- `MySQL`：数据存储
- `next.js`：前端页面框架
- `nest.js`：服务端框架
- `tiptap`：编辑器及文档协作

可访问[蜂窝文档帮助中心](https://think.codingit.cn/share/wiki/WoiR8N5uj4i7)，查看更多功能文档。

## 链接

[蜂窝文档](https://think.codingit.cn)已经部署上线，可前往注册使用。

## 预览

<details>
  <summary>查看预览图</summary>
  <img alt="知识库" src="http://wipi.oss-cn-shanghai.aliyuncs.com/2022-02-20/YN67GM4VQMBTZFZ88TYP8X/image.png" width="420" />
  <img alt="新建文档" src="http://wipi.oss-cn-shanghai.aliyuncs.com/2022-02-20/YN67GM4VQMBTZFZ88TYPQX/image.png" width="420" />
  <img alt="编辑器" src="http://wipi.oss-cn-shanghai.aliyuncs.com/2022-02-20/YN67GM4VQMBTZFZ88TYPZX/image.png" width="420" />
</details>

## 项目开发

[项目开发说明](./let-us-start.md)。

## 自动化部署

> 思路：在服务器部署 webhook，然后在 github setting 中配置相应钩子，实现自动化部署

参考：[webhook](https://github.com/adnanh/webhook/blob/master/docs/Hook-Examples.md#incoming-github-webhook)

## 赞助

如果这个项目对您有帮助，并且您希望支持该项目的开发和维护，请随时扫描一下二维码进行捐赠。非常感谢您的捐款，谢谢！

<div style="display: flex;">
  <img width="300" alt="alipay" src="https://think-1256095494.cos.ap-shanghai.myqcloud.com/think-alipay.jpg" />
  <img width="300" alt="wechat" src="https://think-1256095494.cos.ap-shanghai.myqcloud.com/think-wechat.jpg" />
</div>

## 贡献者

感谢所有为本项目作出贡献的同学！

<a href="https://github.com/ZhongxuYang/think/contributors"><img src="https://opencollective.com/think/contributors.svg?width=890" /></a>
