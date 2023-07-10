# 标准中文README

[![](https://img.shields.io/badge/%E4%B8%BB%E9%A1%B5-CoyyCo%2FbookStore_electron-orange)](https://github.com/CoyyCo/bookStore_electron)

目前，市场对前端开发人员的要求也越来越高，不仅需要会Web端、移动端、小程序，而且还得会桌面端开发，因而报着边学习边开发的思想采用Vue3+electron+node.js+python+mongodb来做一款bookstore，适用于electron初学者学习或有Node.js学习需求的码友们。该项目为项目的前端部分。

## 目录

- [背景](#背景)
- [安装](#安装)
- [功能](#用法)
- [相关项目（可选）](#相关项目)
- [主要项目负责人](#主要项目负责人)
- [参与贡献方式](#参与贡献方式)
    - [贡献人员](#贡献人员)
- [开源协议](#开源协议)

## 背景
项目想法来源于电子书找起来很费劲，而且后续还会遇到电子书管理、存储的问题。因此，初步想法是做一个可以进行电子书收集（python 爬虫）、电子书售卖（爬虫资源免费放送，同时支持其它用户上传电子书进行售卖【1元店】）、电子书在线阅读等功能的一个桌面端程序。

## 安装

[![](https://img.shields.io/badge/%E4%B8%8B%E8%BD%BD-README.md-orange)](README.md)
```
git clone https://github.com/CoyyCo/bookStore_electron.git
npm install
npm install electron:serve
```


## 功能

| 序号 | 功能模块 | 以实现功能 | 待实现功能 |
| :----: | :----: | :----: | :----: |
|1|用户模块|用户登录、注册|用户信息管理，购买、下载、收藏书籍|
|2|书籍检索|通过书籍名称、作者和文章简介进行检索|-|
|3|首页|热门书籍、类别书籍展示|-|
|4|分类书籍|查看不同类别书籍|下拉加载更多资源|
|5|支付模块|-|对接微信或支付宝支付|
|6|在线阅读|-|实现在线阅读，目前还没想好实现方案|

## 相关项目

项目后端地址[@CoyyCo/bookStore](https://github.com/CoyyCo/bookStore_node.git)

## 主要项目负责人

[@CoyyCo](https://github.com/CoyyCo)

## 参与贡献方式

### 贡献人员

感谢所有贡献的人。

[@CoyyCo](https://github.com/CoyyCo)

## 开源协议

[MIT](LICENSE) © CoyyCo