
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {});
};

exports.contact = function(req, res){
  res.render('contact', {});
};

exports.about = function(req, res){
  res.render('about', {});
};
