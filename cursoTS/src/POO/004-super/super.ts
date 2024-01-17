//utilizamos super para buscar algo da classe pai (super class, base class...)
export class Pessoa {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected ID: string,
  ) {}

  public getAge(): number {
    return this.age;
  }

  public getID(): string {
    return this.ID;
  }

  public getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

export class Student extends Pessoa {
  public getFullName(): string {
    return `From the Student class:  ${this.name} ${this.surname}`;
  }
}
export class Client extends Pessoa {
  //para adicionar ou modificar dados que vem do construtor podemos fazer o seguinte:
  //1. removemos os metodos de acesso para nao sobrescrever os originais

  //ex da forma longa;
  // address: string;
  constructor(
    name: string,
    surname: string,
    age: number,
    ID: string,
    public address: string,
  ) {
    super(name, surname, age, ID);
    //ou:
    // this.address = address;
  }
  public getFullName(): string {
    console.log('Executando antes e chamando o metodo da super() abaixo');
    return super.getFullName();
  }
}

const filipin = new Pessoa('filipin', 'souza', 32, '98124797835');
const aluno = new Student('aaaaa', 'bbbbb', 19, 'iukewh09234');
const cliente = new Client('aslkfjalkdj', 'alsfjalkfj', 83, 'awehwfoh', 'xdd');
console.log(filipin.getFullName());
console.log(aluno.getID());
console.log(cliente.getAge());
console.log(cliente.getFullName());
