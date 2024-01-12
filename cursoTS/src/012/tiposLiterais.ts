let x = 100;
// diferente de:
const y = 100;
//pois const assume 100 como um tipo, sem permitir mudar o valor, ao contraio de let
//que podemos mudar o valor mas não o tipo

const z: 100 = 100; //podemos atribuir o tipo e valor, oq nao é recomendado... mo trabalho nada ave tlgd? sla tbkk

console.log(z);

const pessoa = {
  nome: 'max' as const,
  age: 27,
};

// pessoa.nome = 'carlos'; //nao pode trocar o valor

//                    esses valores são tipos
function chooseColor(color: 'blue' | 'yellow' | 'red') {
  return color;
}

console.log(chooseColor('blue'));

export default 1;
