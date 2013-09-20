
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

exports.create = function(req, res){

};


exports.get = function(req, res){
    res.send({
        name: 'Startup',
        category: [
            'Tech',
            'HTML5'
        ]
    });
};

exports.getName = function(req, res) {
    console.log(req.params);

    res.send({
        name: req.params.bookname,
        booid: req.params.bookid
    });
}

exports.update = function(req, res){

};

exports.delete = function(req, res){

};
