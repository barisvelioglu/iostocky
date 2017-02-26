var express = require('express');
var router = express.Router();
var passport = require('../services/passport');

router.get('/', function(req, res, next) {
  res.render("index");
});

router.get('/login', function(req, res, next){
  res.render("login");
});

router.post("/login",passport.authenticate('local',{ successRedirect: '/',
													                                 failureRedirect: '/login',
													                                 failureFlash: true }));

router.get('/logout', function(req, res, next){
  console.log("asdas dasdas d")
  req.logout();
  res.redirect('login');
});

router.get('/changelanguage', function (req, res, next) {
  res.setLocale([req,res], req.query.lang);
  res.cookie('i18nSettings', req.query.lang , { maxAge: 9000000 });
  res.render('index', { title: 'Express'});
});

module.exports = router;
