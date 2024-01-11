const objectA: {
  key1: string;
  readonly key2: string;
  key3?: string;
  [key: string]: unknown;
} = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};

objectA.key1 = 'Another value1';
objectA.key5 = 'fith value';

console.log(objectA.key1, objectA.key5);

const obejctB: Record<string, unknown> = {
  bKey1: 'value1',
  bKey2: 'value2',
};

console.log(obejctB.bKey2);
