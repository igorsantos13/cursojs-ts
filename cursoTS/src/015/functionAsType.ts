type CallbackFunction = (arg: string) => string;

function mapString(
  array: Array<string>,
  callbackFN: CallbackFunction,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackFN(array[i]));
  }

  return newArray;
}

//TS é mt zika tioKKKKKKK por causa do type function aqui ele sabe que o arg é uma string
//dai ja da todos os metodos que uma string possue
const letterToUpperCase = mapString(['a', 's', 'd'], (item) => {
  return item.toUpperCase();
});

console.log(letterToUpperCase);
