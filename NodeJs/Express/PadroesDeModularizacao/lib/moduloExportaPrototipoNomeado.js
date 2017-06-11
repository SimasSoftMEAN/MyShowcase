var SqlServer = function(){};

//Servidor
//bancoDeDados
//usuario
//senha
//porta

SqlServer.prototype.servidor = function(nomeServidor){
    console.log(nomeServidor);
};

SqlServer.prototype.bancoDeDados = function(nomeBd){
    console.log(nomeBd);
};

SqlServer.prototype.usuario = function(nomeUsuario){
    console.log(nomeUsuario);
};

SqlServer.prototype.senha = function(senha){
    console.log(senha);
}

SqlServer.prototype.porta = function(numeroPorta){
    console.log(numeroPorta);
}

exports.SqlServer = SqlServer;