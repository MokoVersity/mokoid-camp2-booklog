
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', {
        name: 'Hank Wang',
        hash: 'ab7613f4699348155cb6ca555c42508d'
    });
};

exports.contact = function(req, res){
    res.render('contact', {});
};

exports.about = function(req, res){
    res.render('about', {});
};
