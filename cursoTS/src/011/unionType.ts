//caso algo possa ter mais de um valor podemos fazer o Union Types
function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(4, 3));
console.log(addOrConcat('salveee', 'evlas'));
