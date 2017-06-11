//Módulo simples:
var hello = require('./lib/hello.js');

//Padrão 1: Definindo um módulo Global
require('./lib/moduloGlobal.js');
foo(); // irá imprimir foo! no console.

//Padrão 2: Exportando um função anônima
//console.log();
var bar = require('./lib/moduloExportaFuncaoAnonima');
bar();

//Padrão 3: Exporta uma funcao nomeada
var teste = require('./lib/moduloExportaFuncaoNomeada').fiz;
teste(); //Tem de ser o mesmo nome da variável que instancia a função nomeada

//Padrão 4: Exporta um Objeto Anônimo
var buz = require('./lib/moduloExportaObjetoAnonimo');
buz.log();
buz.nomeCompleto('Luis Gabriel Nascimento Simas!');

//Padrão 5: Exporta um objeto nomeado
var objetoNomeado = require('./lib/moduloExportaObjetoNomeado').Baz;
objetoNomeado.log();

//Padrão 6: Exporte um prototipo anonimo
var PrototipoAnonimo = require('./lib/moduloExportaPrototipoAnonimo');
var instanciaPA = new PrototipoAnonimo();
instanciaPA.log();

//Padrão 7: Exporta um prototipo nomeado
var MsSql = require('./lib/moduloExportaPrototipoNomeado').SqlServer;
var instancia = new MsSql();
console.log('Padrao 7: Exporta um prototipo nomeado');
//Servidor
instancia.servidor('localhost');
//bancoDeDados
instancia.bancoDeDados('NodeComMSSQL');
//usuario
instancia.usuario('sa');
//senha
instancia.senha('J4n3c4554n1,123');
//porta
instancia.porta(1433);
console.log('Fim Padrao 7');