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

export class Client extends Pessoa {}

const filipin = new Pessoa('filipin', 'souza', 32, '98124797835');
const aluno = new Student('aaaaa', 'bbbbb', 19, 'iukewh09234');
const cliente = new Client('aslkfjalkdj', 'alsfjalkfj', 83, 'awehwfoh');
console.log(filipin.getFullName());
console.log(aluno.getID());
console.log(cliente.getAge());
