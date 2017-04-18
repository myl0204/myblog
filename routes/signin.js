var express = require('express');

var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;

var sha1 = require('sha1');

var UserModel = require('../models/users')
// GET /signin 登录页
router.get('/', checkNotLogin, function(req, res, next) {
  res.render('signin');
});

// POST /signin 用户登录
router.post('/', checkNotLogin, function(req, res, next) {
  //req.fields 没有包含文件上传
  //req.files 包含了文件的上传
  var name = req.fields.name,
  	  password = req.fields.password;
  UserModel.getUserByName(name)
  	.then(function(user){
  		if(!user){
  			req.flash('error','用户不存在');
  			return res.redirect('back');
        // return res.send(req.fields)  
  		}
  		// 密码是否匹配
  		if(sha1(password)!==user.password){
  			req.flash('error','密码错误');
  			return res.redirect('back')
  		}
  		req.flash('success','登录成功');
  		delete user.password;
  		req.session.user = user;
  		res.redirect('/posts');
      // res.send(req.fields) 
  	})
  	.catch(next);
});

module.exports = router;