# myblog
# myblog
### 本项目参考自 [一起学习Node.js](https://github.com/nswbmw/N-blog)
项目中对应模块的用处
1. `express`: web 框架
2. `express-session`: session 中间件
3. `connect-mongo`: 将 session 存储于 mongodb，结合 express-session 使用
4. `connect-flash`: 页面通知提示的中间件，基于 session 实现
5. `ejs`: 模板
6. `express-formidable`: 接收表单及文件的上传中间件
7. `config-lite`: 读取配置文件
8. `marked`: markdown 解析
9. `moment`: 时间格式化
10. `mongolass`: mongodb 驱动
11. `objectid-to-timestamp`: 根据 ObjectId 生成时间戳
12. `sha1`: sha1 加密，用于密码加密
13. `winston`: 日志
14. `express-winston`: 基于 winston 的用于 express 的日志中间件

---
##### 几个小问题:
1. 服务器端如何判别是否登录? 浏览器里只有2个cookie,看不到session
* 在服务器端保存req.session,与客户端的sid关联.通过客户端传来的sid判断是否登录.
* cookie中expires/maxAge的值为Session 是什么意思/该什么设置?
2. 弄清models文件夹下的文件和lib下的mongo.js之间的关系
3. 当没有上传头像时,服务器端该如何处理?
4. addCreateAt这个plugin又是什么鬼? objectID不是已经有了吗?
