var Baz = function() {};

Baz.prototype.log = function(){
    console.log('Baz!');
};

exports.Baz = new Baz();