type CarName = { name: string };
type CarWeight = { weightInKG: number };
type CarEngine = { model: string | number };

type CarConfig = (CarName & CarEngine) | CarWeight;
//nome e motor ou apenas o peso

const mclarenMP44: CarConfig = {
  name: 'MP4/4',
  model: 'Honda',
};

const rbr33: CarConfig = {
  weightInKG: 700,
};

console.log(mclarenMP44, rbr33);

//na minha cabeça esse exemplo era melhor mas faz parte xdd

//intersecao
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type intersection = AB & AC;
