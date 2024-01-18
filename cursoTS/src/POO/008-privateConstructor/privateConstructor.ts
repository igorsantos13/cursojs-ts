//singleton - GoF
export class Database {
  //esse atributo édo TIPO Database
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Connected at: ${this.host} ${this.user} ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Already connected from previous call');
      return Database.database;
    }
    console.log('New database created!');

    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123');
const db2 = Database.getDatabase('localhost', 'root', '876');

console.log(db1.connect());
console.log(db2.connect());
