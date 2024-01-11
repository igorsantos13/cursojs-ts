//declarei que o retorno seria um number
export function multiply(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

//inferencia faz com que o TS saiba que o retorno da funcao é uma string
export function concatStrings(...args: string[]) {
  //usando join para juntar o arrya de strings.
  return args.join('');
}

export function toUpperCase(...args: Array<string>): string[] {
  return args.map((arg) => arg.toUpperCase());
}

const result = multiply(1, 2, 34, 52);
const joinStrings = concatStrings('xdd', 'vapo', 'fazoL');
const stringToUpperCase = toUpperCase('spfc', 'mclaren');

console.log(result, joinStrings, stringToUpperCase);
