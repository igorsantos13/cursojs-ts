let x: any;
x = 'valinhos';
let y = 900;

console.log(x + y);

//any permite fazer essa aberração em forma de código que somar (no caso cocatenar) uma string e um number
let z: unknown;
z = 800;
z = 'xdd';

console.log(z + y); //aqui o TS ta GRITANDO dizendo que z é do tipo unknown
