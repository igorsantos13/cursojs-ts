const numberAndStringTuple: [number, string] = [1, 'car'];
//tupla guarda um numero limitado de itens e tipos de valores

//no mundo real o exemplo abaixo seria mais interessante para ser utilizado como objeto mas releva esse. xdd
const clientInfo: [number, string, boolean?] = [2, 'Max'];
//podemos fazer com que um valor seja opcional ao inserir um ? no fim do tipo

const carInfo: [string, number, ...string[]] = ['ferrari', 1, 'dino', 'f40'];
//o rest operator tbm é pode ser utilizado para receber informacoes restantes

//por padrao, as tuplas sao mutaveis, mas podemos fazer com que seja imutavel,
const clientInfo2: readonly [number, string, boolean?] = [2, 'Max'];
//adicionando o readonly não permitimos que faça alteraçoes na tupla evitando, por exemplo a utilizaçao do metodo pop
clientInfo2.pop();

//o que nao podemos fazer e reatribuir o tipo de algum dos valores,
//para fazr a substituiçao devemos utilizar o mesmo tipo de valor ja utilizado anteriomente
numberAndStringTuple[0] = 100;
console.log(numberAndStringTuple);
