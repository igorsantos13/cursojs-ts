//documentation example - code prac:
type FirstName = string;
type PersonScore = number;

// variable name : type alias = value
let firstName: FirstName = 'Tom';
let personScore: PersonScore = 80;

//type aliases in functions - mano eu genuinamente nao entendi a linha abaixoKKKKKKKKK
// type FunctionTypeAlias = (arg1: string) => ReturnType;

type Log = (message: string) => void;

const log: Log = (message: string) => {
  console.log(message);
};

log('teste');

type Score = {
  name: string;
  score: number;
  pass?: boolean;
  log: Log;
};

const tomScore: Score = { name: 'Tom', score: 90, log: (arg) => arg };

console.log(tomScore.log('xdd'));

//daqui pra baixo é do curso
type Idade = number; //tipo unico
type Pessoa = {
  nome: string;
  idade: number;
  salario?: number;
  favoriteCar: string;
};
//objeto acima é do TIPO objeto e não valor
type Carros = 'McLaren' | 'Ferrari' | 'BMW';
type Carros2 = 'AUDI' | 'Renault';
type favoriteCar = Carros | Carros2;

const pessoa1: Pessoa = {
  nome: 'Max',
  idade: 26,
  salario: 300_000, //da pra escrever numeros separados por _
};

console.log(pessoa1);

export function setFavoriteCar(pessoa: Pessoa, carro: favoriteCar): Pessoa {
  return { ...pessoa, favoriteCar: carro }; //shadow copy - nao altera o valor original do objeto
}
