export class User {
  static defaultAge = 10;
  static defaultID = '--';
  static defaultValue = 'default';
  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public ID: string,
  ) {}

  static sayHello(): void {
    console.log('Hello');
  }

  static createUser(name: string, surname: string): User {
    return new User(name, surname, this.defaultAge, this.defaultID);
    // return new User(name, surname, User.defaultAge, User.defaultID);
    // genuinamente nao sei a diferneça entre user. e this. nesse caso, acho, só acho que da no mesmo.
  }

  accessStaticValues(): void {
    console.log(User.defaultAge, User.defaultID, User.defaultValue);
    // console.log(this.) //por ser um método, ou seja, pode ser acessada pela intancia
    //não é possivel utizliar o "this" para ser chamada como instancia
  }
}

//testes
const user1 = new User('James', 'Rodriquez', 31, '123.456.789-00');
user1.ID = '123.123.123-00';
console.log(user1.ID);
// user1.sayHello //metodos estaticos nao sao acessiveis pela intancia
User.sayHello();

//factor methods
const user2 = User.createUser('Jude', 'Bellingham');
console.log(user2.age);

user2.accessStaticValues();
