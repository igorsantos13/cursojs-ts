function random(min, max){
    const r = Math.random() * (max - min) + min;
    const a = Math.floor(r)
    return a;
}

const min = 1;
const max = 10;
let rand;

while(rand !== 7){
    rand = random(min, max)
    console.log(rand)
}