//para "tipar" o this utilizamos o primeiro argumento para dar um tipo
//(this: type) não é um argumento em si mas apenas um meio para dar tipagem
export function funcao(this: Date, arg1: string): void {
  console.log(this);
  console.log(arg1);
}
//em call o primeiro argumento seria quem é o this da função
//a partir do segundo argumento são arguemntos comuns
funcao.call(new Date(), 'teste');
funcao.apply(new Date(), ['teste']);
//oq muda no apply é passar argumentos entre [] fora isso sei la oq muda xD
