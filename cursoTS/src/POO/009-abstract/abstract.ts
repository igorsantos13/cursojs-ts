export abstract class Hero {
  protected abstract guild: string;
  constructor(
    protected name: string,
    protected attack: number,
    protected healthPoints: number,
  ) {}

  attackEnemy(hero: Hero) {
    if (hero.name == this.name) return 'You can not attack yourself';

    this.attackName();
    console.log(`${this.name} from guild: ${this.guild} está atacando`);
    hero.reduceEnemyHP(this.attack);
  }

  reduceEnemyHP(attackPower: number) {
    this.healthPoints -= attackPower;
    if (this.healthPoints <= 0) {
      console.log(`${this.name} foi derrotado`);
      return;
    } else {
      console.log(`${this.name} levou dano, agora tem ${this.healthPoints} HP`);
    }
  }

  //ao criar um metodo abstrato, obriga que as classes filhas.
  //tenham que ter esse metodo.
  abstract attackName(): void;
}

export class Mage extends Hero {
  protected guild: string = '🧙';
  attackName(): void {
    console.log('Fireball!!');
  }
}
export class Vampire extends Hero {
  protected guild: string = '🧛';
  attackName(): void {
    console.log('i bwite u >.<');
  }
}

const mage = new Mage('mage', 190, 1000);
const vampire = new Vampire('vampire', 120, 300);

mage.attackEnemy(vampire);
vampire.attackEnemy(mage);
