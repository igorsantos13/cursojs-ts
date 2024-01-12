enum Cores {
  VERMELHO, //0
  AZUL, //1
  AMARELO, //2
}

console.log(Cores); //retorna todos os dados
console.log(Cores.VERMELHO); //retorna o indice (0)
console.log(Cores[0]); //retorna o valor

//podemos mudar a enumeraçao de cada item, basta informar seu valor inicial

enum Carros {
  MCLAREN = 1,
  FERRARI = 3,
  MERCEDES,
  RENAULT = 'RENAULT', //caso o TS nao saiba para qual numero seguir, o valor baixo deve ter um inicializador
  TOYOTA = 'TOYOTA', //se o inicializdor for um numero ex: 101, o inicializador abaixo seria 102
}

//ao criar 2 enums de mesmo nomes o TS faz um merge dos 2, seguindo a ordem estabelecida
enum Carros {
  HONDA = 202,
  YAMAHA,
}

console.log(Carros);
console.log(Carros[100]); //undefined

function chooseCar(car: Carros): void {
  console.log(Carros[car]);
}

chooseCar(Carros.RENAULT);
