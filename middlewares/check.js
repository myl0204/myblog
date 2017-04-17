module.exports = {
	checkLogin:function(req,res,next){
		if(!req.session.user){
			req.flash('error','未登录');
			return res.redirect('/signin')//跳转到登录页面
		}
		next();
	},

	checkNotLogin:function checkNotLogin(req,res,next){
		if(req.session.user){
			req.flash('error','已登录');
			return res.redirect('back')
		}
		next();
	}
};