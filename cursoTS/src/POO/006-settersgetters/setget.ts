export class User {
  constructor(
    private name: string,
    private surname: string,
    private age: number,
    private _ID: string,
  ) {}

  //setter e getters se comportam como atributos apesarem de serem metodos
  set ID(id: string) {
    this._ID = id;
  }

  get ID(): string {
    return this._ID.replace(/\D/g, '');
  }
}

//para chamar o atributo set ID devemos chama-lo da seguinte forma:
const user1 = new User('Niko', 'Belic', 41, '123.456.789-00');

//chamamos o setter ao utilizar o sinal de '='
user1.ID = '987,654.321-00';

console.log(user1.ID);
