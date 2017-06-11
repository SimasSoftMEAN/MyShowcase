var Buz = function() {};

Buz.prototype.log = function(){
  console.log('buz!');  
};

Buz.prototype.nomeCompleto = function(nome){
    console.log('Olá ' + nome);
};

module.exports = new Buz();