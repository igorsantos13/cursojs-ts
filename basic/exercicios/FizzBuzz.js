function FizzBuzz(number){
    if(typeof number !== 'number') return number
    if(typeof number == "number"){
        if(number % 3 == 0 && number % 5 == 0){
            return 'FizzBuzz'
        } else if(number % 3 === 0){
            return 'Fizz'
        }else if(number % 5 === 0){
            return 'Buzz'
        }else {
            return number
        }
    }
}

console.log(FizzBuzz('a'))
for(let i = 0; i<=100; i++){
    console.log(i, FizzBuzz(i))
}