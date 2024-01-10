//Arrays
const numberArray: Array<number> = [1, 2, 3];
const stringArray: string[] = ['string 1', 'string 2', 'string 3'];

//Objects
const person: { name: string; age: number; hasTicket?: boolean } = {
  name: 'Hill',
  age: 21,
  hasTicket: false,
};

//functions
function sum(x: number, y: number) {
  return x + y;
}

const result = sum(3, 2); //ts ja sabe que o retorno number

//é possivel tambem fazer a monstruisidade abaixo, (mais pra frente vai ser mais sentido com os Tipos)
const sum2: (x: number, y: number) => number = (x, y) => x + y;
//note que o trecho acima é apenas o tipo da variavel, e apenas depois do = que se inicia função de fato

//lembrete final:
//apenas adicione os tipos caso o TS NÃo conseguiu fazer a inferencia
//após escrever o código o TS adicionou o tipo errado ou não conseguiu, acicione o tipo desejado
