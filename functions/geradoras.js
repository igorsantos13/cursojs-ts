//para cada vez que funçao geradora for executada
//retorna um novo valor
function* gerador1(){
    yield 0
    yield 1
    yield 2
}

function* gerador2(){
    yield* gerador1()
    yield 3
    yield 4
    yield 5
}

function* gerador3(){
    yield 'koe'
    yield 'segundo yield'
    yield 'terceiro yield'
}

const g3 = gerador3();
for(let valor of g3){
    console.log(valor)
}
