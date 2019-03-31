const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const validator = require('express-validator');
var csrf = require('csurf');
const passport = require('passport')
var csrfProtection = csrf();
var Film = require('../public/models/film')
var User = require('../public/models/user')
router.use(csrfProtection);
const app = express();
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(validator());


router.get('/', (req, res) => {
   res.render('home');
});
router.get('/error', (req, res) => {
   res.render('error');
});
router.get('/5c3d38ee0e63740adcdbad9b', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Forrest Gump' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad9b', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post('/5c3d38ee0e63740adcdbad9b', isLoggedIn, function(req, res, next){
	var x;
	User.findById(req.user, function(err, user) {
		x=user.lfilms;
		var y = x+1;	
		if(x===0){
			Film.findOne({ title: 'Forrest Gump' },function(err, film) {
				var money = user.wallet-film.price;
				if(money>=0)
				{
					User.findByIdAndUpdate(req.user,{$set: {films: film, lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
					res.redirect('/error');
			});
		}
		else{
			Film.findOne({ title: 'Forrest Gump' },function(err, film) {
				var flag=0;
				for(var i = 0; i<user.films.length; i++)
				{
					if(user.films[i].title=='Forrest Gump')
						flag=1;
				}
				if(flag==0)
					var money = user.wallet-film.price;
				if(money>=0 && flag==0)
				{
					User.findByIdAndUpdate(req.user,{$push: {films: film}}, {new: true}, function(err, user){
					});
					User.findByIdAndUpdate(req.user,{$set: {lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
				{
					res.redirect('/error');
				}
			});
		}
	});
	
});
router.get('/5c3d38ee0e63740adcdbad9bvid', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Forrest Gump' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad9bvid', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post("/5c3d38ee0e63740adcdbad9bvid", isLoggedIn, function(req,res){
	Film.findOne({ title: 'Forrest Gump' },function(err, film) {
		var licz=film.ratelicz+1;
		var suma=film.ratesum+parseInt(req.body.select);
		var r=(suma/licz).toPrecision(2);
		film.ratelicz=licz;
		film.ratesum=suma;
		film.rate=r;
		film.save();
	});
    
	res.redirect('/5c3d38ee0e63740adcdbad9bvid');
});
router.get('/5c3d38ee0e63740adcdbad92', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Blade Runner 2049' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad92', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post('/5c3d38ee0e63740adcdbad92', isLoggedIn, function(req, res, next){
	var x;
	User.findById(req.user, function(err, user) {
		x=user.lfilms;
		var y = x+1;
		
		if(x===0){
			Film.findOne({ title: 'Blade Runner 2049' },function(err, film) {
				var money = user.wallet-film.price;
				if(money>=0)
				{
					User.findByIdAndUpdate(req.user,{$set: {films: film, lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
					res.redirect('/error');
			});
		}
		else{
			Film.findOne({ title: 'Blade Runner 2049' },function(err, film) {
				var flag=0;
				for(var i = 0; i<user.films.length; i++)
				{
					if(user.films[i].title=='Blade Runner 2049')
						flag=1;
				}
				if(flag==0)
					var money = user.wallet-film.price;
				if(money>=0 && flag==0)
				{
					User.findByIdAndUpdate(req.user,{$push: {films: film}}, {new: true}, function(err, user){
					});
					User.findByIdAndUpdate(req.user,{$set: {lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
				{
					res.redirect('/error');
				}
			});
		}
	});
	
});
router.get('/5c3d38ee0e63740adcdbad92vid', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Blade Runner 2049' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad92vid', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post("/5c3d38ee0e63740adcdbad92vid", isLoggedIn, function(req,res){
    Film.findOne({ title: 'Blade Runner 2049' },function(err, film) {
		var licz=film.ratelicz+1;
		var suma=film.ratesum+parseInt(req.body.select);
		var r=(suma/licz).toPrecision(2);
		film.ratelicz=licz;
		film.ratesum=suma;
		film.rate=r;
		film.save();
	});
	res.redirect('/5c3d38ee0e63740adcdbad92vid');
});
router.get('/5c3d38ee0e63740adcdbad93', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Władca Pierścieni: Drużyna Pierścienia' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad93', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post('/5c3d38ee0e63740adcdbad93', isLoggedIn, function(req, res, next){
	var x;
	User.findById(req.user, function(err, user) {
		x=user.lfilms;
		var y = x+1;
		
		if(x===0){
			Film.findOne({ title: 'Władca Pierścieni: Drużyna Pierścienia' },function(err, film) {
				var money = user.wallet-film.price;
				if(money>=0)
				{
					User.findByIdAndUpdate(req.user,{$set: {films: film, lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
					res.redirect('/error');
			});
		}
		else{
			Film.findOne({ title: 'Władca Pierścieni: Drużyna Pierścienia' },function(err, film) {
				var money = user.wallet-film.price;
				var flag=0;
				for(var i = 0; i<user.films.length; i++)
				{
					if(user.films[i].title=='Władca Pierścieni: Drużyna Pierścienia')
						flag=1;
				}
				if(flag==0)
					var money = user.wallet-film.price;
				if(money>=0 && flag==0)
				{
					User.findByIdAndUpdate(req.user,{$push: {films: film}}, {new: true}, function(err, user){
					});
					User.findByIdAndUpdate(req.user,{$set: {lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
				{
					res.redirect('/error');
				}
			});
		}
	});
	
});
router.get('/5c3d38ee0e63740adcdbad93vid', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Władca Pierścieni: Drużyna Pierścienia' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad93vid', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post("/5c3d38ee0e63740adcdbad93vid", isLoggedIn, function(req,res){
    Film.findOne({ title: 'Blade Runner 2049' },function(err, film) {
		var licz=film.ratelicz+1;
		var suma=film.ratesum+parseInt(req.body.select);
		var r=(suma/licz).toPrecision(2);
		film.ratelicz=licz;
		film.ratesum=suma;
		film.rate=r;
		film.save();
	});
	res.redirect('/5c3d38ee0e63740adcdbad93vid');
});
router.get('/5c3d38ee0e63740adcdbad94', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Siedem' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad94', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post('/5c3d38ee0e63740adcdbad94', isLoggedIn, function(req, res, next){
	var x;
	User.findById(req.user, function(err, user) {
		x=user.lfilms;
		var y = x+1;
		
		if(x===0){
			Film.findOne({ title: 'Siedem' },function(err, film) {
				var money = user.wallet-film.price;
				if(money>=0)
				{
					User.findByIdAndUpdate(req.user,{$set: {films: film, lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
					res.redirect('/error');
			});
		}
		else{
			Film.findOne({ title: 'Siedem' },function(err, film) {
				var money = user.wallet-film.price;
				var flag=0;
				for(var i = 0; i<user.films.length; i++)
				{
					if(user.films[i].title=='Siedem')
						flag=1;
				}
				if(flag==0)
					var money = user.wallet-film.price;
				if(money>=0 && flag==0)
				{
					User.findByIdAndUpdate(req.user,{$push: {films: film}}, {new: true}, function(err, user){
					});
					User.findByIdAndUpdate(req.user,{$set: {lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
				{
					res.redirect('/error');
				}
			});
		}
	});
	
});
router.get('/5c3d38ee0e63740adcdbad94vid', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Siedem' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad94vid', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post("/5c3d38ee0e63740adcdbad94vid", isLoggedIn, function(req,res){
    Film.findOne({ title: 'Siedem' },function(err, film) {
		var licz=film.ratelicz+1;
		var suma=film.ratesum+parseInt(req.body.select);
		var r=(suma/licz).toPrecision(2);
		film.ratelicz=licz;
		film.ratesum=suma;
		film.rate=r;
		film.save();
	});
	res.redirect('/5c3d38ee0e63740adcdbad94vid');
});
router.get('/5c3d38ee0e63740adcdbad97', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Mad Max: Na drodze gniewu' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad97', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post('/5c3d38ee0e63740adcdbad97', isLoggedIn, function(req, res, next){
	var x;
	User.findById(req.user, function(err, user) {
		x=user.lfilms;
		var y = x+1;
		
		if(x===0){
			Film.findOne({ title: 'Mad Max: Na drodze gniewu' },function(err, film) {
				var money = user.wallet-film.price;
				if(money>=0)
				{
					User.findByIdAndUpdate(req.user,{$set: {films: film, lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
					res.redirect('/error');
			});
		}
		else{
			Film.findOne({ title: 'Mad Max: Na drodze gniewu' },function(err, film) {
				var money = user.wallet-film.price;
				var flag=0;
				for(var i = 0; i<user.films.length; i++)
				{
					if(user.films[i].title=='Mad Max: Na drodze gniewu')
						flag=1;
				}
				if(flag==0)
					var money = user.wallet-film.price;
				if(money>=0 && flag==0)
				{
					User.findByIdAndUpdate(req.user,{$push: {films: film}}, {new: true}, function(err, user){
					});
					User.findByIdAndUpdate(req.user,{$set: {lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
				{
					res.redirect('/error');
				}
			});
		}
	});
	
});
router.get('/5c3d38ee0e63740adcdbad97vid', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Mad Max: Na drodze gniewu' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad97vid', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post("/5c3d38ee0e63740adcdbad97vid", isLoggedIn, function(req,res){
    Film.findOne({ title: 'Mad Max: Na drodze gniewu' },function(err, film) {
		var licz=film.ratelicz+1;
		var suma=film.ratesum+parseInt(req.body.select);
		var r=(suma/licz).toPrecision(2);
		film.ratelicz=licz;
		film.ratesum=suma;
		film.rate=r;
		film.save();
	});
	res.redirect('/5c3d38ee0e63740adcdbad97vid');
});
router.get('/5c3d38ee0e63740adcdbad95', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Incepcja' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad95', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post('/5c3d38ee0e63740adcdbad95', isLoggedIn, function(req, res, next){
	var x;
	User.findById(req.user, function(err, user) {
		x=user.lfilms;
		var y = x+1;
		
		if(x===0){
			Film.findOne({ title: 'Incepcja' },function(err, film) {
				var money = user.wallet-film.price;
				if(money>=0)
				{
					User.findByIdAndUpdate(req.user,{$set: {films: film, lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
					res.redirect('/error');
			});
		}
		else{
			Film.findOne({ title: 'Incepcja' },function(err, film) {
				var money = user.wallet-film.price;
				var flag=0;
				for(var i = 0; i<user.films.length; i++)
				{
					if(user.films[i].title=='Incepcja')
						flag=1;
				}
				if(flag==0)
					var money = user.wallet-film.price;
				if(money>=0 && flag==0)
				{
					User.findByIdAndUpdate(req.user,{$push: {films: film}}, {new: true}, function(err, user){
					});
					User.findByIdAndUpdate(req.user,{$set: {lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
				{
					res.redirect('/error');
				}
			});
		}
	});
	
});
router.get('/5c3d38ee0e63740adcdbad95vid', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Incepcja' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad95vid', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post("/5c3d38ee0e63740adcdbad95vid", isLoggedIn, function(req,res){
    Film.findOne({ title: 'Incepcja' },function(err, film) {
		var licz=film.ratelicz+1;
		var suma=film.ratesum+parseInt(req.body.select);
		var r=(suma/licz).toPrecision(2);
		film.ratelicz=licz;
		film.ratesum=suma;
		film.rate=r;
		film.save();
	});
	res.redirect('/5c3d38ee0e63740adcdbad95vid');
});
router.get('/5c3d38ee0e63740adcdbad96', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Matrix' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad96', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post('/5c3d38ee0e63740adcdbad96', isLoggedIn, function(req, res, next){
	var x;
	User.findById(req.user, function(err, user) {
		x=user.lfilms;
		var y = x+1;
		
		if(x===0){
			Film.findOne({ title: 'Matrix' },function(err, film) {
				var money = user.wallet-film.price;
				if(money>=0)
				{
					User.findByIdAndUpdate(req.user,{$set: {films: film, lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
					res.redirect('/error');
			});
		}
		else{
			Film.findOne({ title: 'Matrix' },function(err, film) {
				var money = user.wallet-film.price;
				var flag=0;
				for(var i = 0; i<user.films.length; i++)
				{
					if(user.films[i].title=='Matrix')
						flag=1;
				}
				if(flag==0)
					var money = user.wallet-film.price;
				if(money>=0 && flag==0)
				{
					User.findByIdAndUpdate(req.user,{$push: {films: film}}, {new: true}, function(err, user){
					});
					User.findByIdAndUpdate(req.user,{$set: {lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
				{
					res.redirect('/error');
				}
			});
		}
	});
	
});
router.get('/5c3d38ee0e63740adcdbad96vid', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Matrix' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad96vid', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post("/5c3d38ee0e63740adcdbad96vid", isLoggedIn, function(req,res){
    Film.findOne({ title: 'Matrix' },function(err, film) {
		var licz=film.ratelicz+1;
		var suma=film.ratesum+parseInt(req.body.select);
		var r=(suma/licz).toPrecision(2);
		film.ratelicz=licz;
		film.ratesum=suma;
		film.rate=r;
		film.save();
	});
	res.redirect('/5c3d38ee0e63740adcdbad96vid');
});
router.get('/5c3d38ee0e63740adcdbad99', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Drzewo Życia' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad99', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post('/5c3d38ee0e63740adcdbad99', isLoggedIn, function(req, res, next){
	var x;
	User.findById(req.user, function(err, user) {
		x=user.lfilms;
		var y = x+1;
		
		if(x===0){
			Film.findOne({ title: 'Drzewo Życia' },function(err, film) {
				var money = user.wallet-film.price;
				if(money>=0)
				{
					User.findByIdAndUpdate(req.user,{$set: {films: film, lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
					res.redirect('/error');
			});
		}
		else{
			Film.findOne({ title: 'Drzewo Życia' },function(err, film) {
				var money = user.wallet-film.price;
				var flag=0;
				for(var i = 0; i<user.films.length; i++)
				{
					if(user.films[i].title=='Drzewo Życia')
						flag=1;
				}
				if(flag==0)
					var money = user.wallet-film.price;
				if(money>=0 && flag==0)
				{
					User.findByIdAndUpdate(req.user,{$push: {films: film}}, {new: true}, function(err, user){
					});
					User.findByIdAndUpdate(req.user,{$set: {lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
				{
					res.redirect('/error');
				}
			});
		}
	});
	
});
router.get('/5c3d38ee0e63740adcdbad99vid', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Drzewo Życia' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad99vid', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post("/5c3d38ee0e63740adcdbad99vid", isLoggedIn, function(req,res){
    Film.findOne({ title: 'Drzewo Życia' },function(err, film) {
		var licz=film.ratelicz+1;
		var suma=film.ratesum+parseInt(req.body.select);
		var r=(suma/licz).toPrecision(2);
		film.ratelicz=licz;
		film.ratesum=suma;
		film.rate=r;
		film.save();
	});
	res.redirect('/5c3d38ee0e63740adcdbad99vid');
});
router.get('/5c3d38ee0e63740adcdbad9a', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Jurassic Park' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad9a', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post('/5c3d38ee0e63740adcdbad9a', isLoggedIn, function(req, res, next){
	var x;
	User.findById(req.user, function(err, user) {
		x=user.lfilms;
		var y = x+1;
		
		if(x===0){
			Film.findOne({ title: 'Jurassic Park' },function(err, film) {
				var money = user.wallet-film.price;
				if(money>=0)
				{
					User.findByIdAndUpdate(req.user,{$set: {films: film, lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
					res.redirect('/error');
			});
		}
		else{
			Film.findOne({ title: 'Jurassic Park' },function(err, film) {
				var money = user.wallet-film.price;
				var flag=0;
				for(var i = 0; i<user.films.length; i++)
				{
					if(user.films[i].title=='Jurassic Park')
						flag=1;
				}
				if(flag==0)
					var money = user.wallet-film.price;
				if(money>=0 && flag==0)
				{
					User.findByIdAndUpdate(req.user,{$push: {films: film}}, {new: true}, function(err, user){
					});
					User.findByIdAndUpdate(req.user,{$set: {lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
				{
					res.redirect('/error');
				}
			});
		}
	});
	
});
router.get('/5c3d38ee0e63740adcdbad9avid', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Jurassic Park' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad9avid', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post("/5c3d38ee0e63740adcdbad9avid", isLoggedIn, function(req,res){
    Film.findOne({ title: 'Jurassic Park' },function(err, film) {
		var licz=film.ratelicz+1;
		var suma=film.ratesum+parseInt(req.body.select);
		var r=(suma/licz).toPrecision(2);
		film.ratelicz=licz;
		film.ratesum=suma;
		film.rate=r;
		film.save();
	});
	res.redirect('/5c3d38ee0e63740adcdbad9avid');
});
router.get('/5c3d38ee0e63740adcdbad98', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Nosferatu - Symfonia Grozy' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad98', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post('/5c3d38ee0e63740adcdbad98', isLoggedIn, function(req, res, next){
	var x;
	User.findById(req.user, function(err, user) {
		x=user.lfilms;
		var y = x+1;
		
		if(x===0){
			Film.findOne({ title: 'Nosferatu - Symfonia Grozy' },function(err, film) {
				var money = user.wallet-film.price;
				if(money>=0)
				{
					User.findByIdAndUpdate(req.user,{$set: {films: film, lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
					res.redirect('/error');
			});
		}
		else{
			Film.findOne({ title: 'Nosferatu - Symfonia Grozy' },function(err, film) {
				var money = user.wallet-film.price;
				var flag=0;
				for(var i = 0; i<user.films.length; i++)
				{
					if(user.films[i].title=='Nosferatu - Symfonia Grozy')
						flag=1;
				}
				if(flag==0)
					var money = user.wallet-film.price;
				if(money>=0 && flag==0)
				{
					User.findByIdAndUpdate(req.user,{$push: {films: film}}, {new: true}, function(err, user){
					});
					User.findByIdAndUpdate(req.user,{$set: {lfilms: y, wallet: money}}, {new: true}, function(err, user){
					});
					res.redirect('/ranking');
				}
				else
				{
					res.redirect('/error');
				}
			});
		}
	});
	
});
router.get('/5c3d38ee0e63740adcdbad98vid', isLoggedIn, function(req, res, next){
	Film.findOne({ title: 'Nosferatu - Symfonia Grozy' },function(err, film) {
		User.findById(req.user, function(err, user) {
			res.render('5c3d38ee0e63740adcdbad98vid', {user: req.user, csrfToken: req.csrfToken(), film: film});
		});
		
  });
});
router.post("/5c3d38ee0e63740adcdbad98vid", isLoggedIn, function(req,res){
    Film.findOne({ title: 'Nosferatu - Symfonia Grozy' },function(err, film) {
		var licz=film.ratelicz+1;
		var suma=film.ratesum+parseInt(req.body.select);
		var r=(suma/licz).toPrecision(2);
		film.ratelicz=licz;
		film.ratesum=suma;
		film.rate=r;
		film.save();
	});
	res.redirect('/5c3d38ee0e63740adcdbad98vid');
});
router.get('/ranking', function(req, res, next){
	Film.find(function(err, docs) {
      var filmChunks = [];
      for (var i = 0; i < docs.length; i++) {
		filmChunks.push(docs.slice(i, i + 1));
      }
      res.render('ranking', { title: 'Ranking', films: filmChunks });
	}).sort({rate: -1});
});
router.get('/myfilms', function(req, res, next){
	User.findById(req.user, function(err, user) {
			var filmChunks = [];
			for (var i = 0; i < user.films.length; i++) {
			filmChunks.push(user.films.slice(i, i + 1));
		}
		
		if(user.lfilms==0)
			res.render('films', {user: req.user, csrfToken: req.csrfToken(), title: 'My Films', films: filmChunks });
		else
			res.render('myfilms', {user: req.user, csrfToken: req.csrfToken(), title: 'My Films', films: filmChunks });
	});
});
/*router.get('/search', function(req, res, next){
	var q = req.query.q;
	Film.find({
		title: {
			$regex: new RegExp(q)
		}
	}, {
		_id: 0,
		__v: 0
	}, function(err, data){
		res.json(data);
	}).limit(10);
});*/

router.get('/profile', isLoggedIn, function (req, res, next) {
	var messages = req.flash('error');
	User.findById(req.user, function(err, user) {
    res.render('profile', {user: req.user, csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
	
  });
  
});
router.post("/profile", isLoggedIn, function(req,res){
    User.findByIdAndUpdate(req.user,{$set: {fname: req.body.first_name, lname: req.body.last_name, phone: req.body.phone}}, {new: true}, function(err, user){
		
	});
	res.redirect('/profile');
});
router.post("/add20", isLoggedIn, function(req,res){
	User.findById(req.user, function(err, user) {
		var money = user.wallet+20;
		User.findByIdAndUpdate(req.user,{$set: {wallet: money}}, {new: true}, function(err, doc){
			res.redirect('/profile');
		});
	});
});
router.post("/add50", isLoggedIn, function(req,res){
	User.findById(req.user, function(err, user) {
		var money = user.wallet+50;
		User.findByIdAndUpdate(req.user,{$set: {wallet: money}}, {new: true}, function(err, doc){
			res.redirect('/profile');
		});
	});
	
});
router.post("/add100", isLoggedIn, function(req,res){
	User.findById(req.user, function(err, user) {
		var money = user.wallet+100;
		User.findByIdAndUpdate(req.user,{$set: {wallet: money}}, {new: true}, function(err, doc){
			res.redirect('/profile');
		});
	});
	
});

router.get('/logout', isLoggedIn, function (req, res, next) {
    req.logout();
    res.redirect('/');
});

router.use('/', notLoggedIn, function(req, res, next) {
   next();
});

router.get('/signup', function(req, res, next){
	var messages = req.flash('error');
	res.render('signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});
router.post('/signup', passport.authenticate('local.signup', {
	successRedirect: '/profile',
	failureRedirect: '/signup',
	failureFlash: true
}));
router.get('/signin', function (req, res, next) {
    var messages = req.flash('error');
    res.render('signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
}));
module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/signup');
}

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}