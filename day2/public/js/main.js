$(function() {
    var loop = function() {
        $('img').hide(2000).show(2000, function() {
            loop();
        });
    }
    loop();
});
