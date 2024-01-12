let x;
if (typeof x === 'undefined') x = 20;

console.log(x);

export function createPerson(firstName: string, lastName?: string) : {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: unknown): number | null {
  if (typeof x === 'number') return x * x;

  return null;
}

const squareOfTwo = squareOf(2);

if (typeof squareOfTwo === null) {
  console.log('invalid account');
} else {
  console.log('logged in');
}
