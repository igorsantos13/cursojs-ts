// for(let i = 0; i <= 10; i++){
//     // if(i % 2 == 0){
//     //     console.log(i)
//     // }

//     const par = i % 2 === 0;
//     console.log(par ? `${i} par` :`${i} impar`)
// }

const drivers = ['Lewis', 'Max', 'Alonso', 'Piastri']
//      < drivers para terminar no numero de index (3)
// se for <= vai terminar no tamanho do array (4)
for(let i = 0; i < drivers.length; i++){
    console.log(`Posição: ${i}: `, drivers[i])
    //usamos array[i] para substituir o famoso
    //array[0], array[1], array[2]
    //pois assim, para cada index do array
    //chamamos a variavel
}