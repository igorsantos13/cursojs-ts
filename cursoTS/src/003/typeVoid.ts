function noReturn(...args: string[]) {
  console.log(args.join(' '));
}

noReturn('LeBron', 'Hamilton', 'Woods');

const person = {
  name: 'Oleksandr',
  age: 28,

  showNameAndAge(): void {
    console.log(this.name + ' ' + this.age + ' years old');
  },
};

person.showNameAndAge();

export default person;
