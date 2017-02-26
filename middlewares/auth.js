function isLoggedIn(req,res,next) {
	if (req.isAuthenticated() || req.url.startsWith('/login') || req.url.startsWith('/logout')) {
		return next();
	}

	req.flash('error', "You have to login");
	res.redirect("/login");
}

module.exports = {
  isLoggedIn : isLoggedIn
};
