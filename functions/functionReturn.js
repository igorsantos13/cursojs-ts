//we can return ANYTHING from a function
//as we return something we can use this value however we want

function sum(a,b){
    return a + b
}

function sum2(a,b){
    console.log(a + b)
}

//both functions above do the same thing
//sum a and b values, although we can only use  one value from them

//the sum() return we can give to an variable to manipulate this value later
//but the console.log() only shows on screen the sum of a + b, but there's nothing else we can do

// function can be returned, or not. It depends on what it was build for
// we have many valuable function that doenst return anything but it still very useful

//both objects:

function person(name, age){
    return {
        name,
        age,
    }
}

const person2 = {name: 'Hamilton', age: 36}

console.log(person('Charles', 25))
console.log(person2)

//both function return an object
console.log(typeof person)
console.log(typeof person2)

//crazy function:

//recives a number to be the multiplier
function multiply(multiplier){
    //MULTIPLIER CLOSURE!
    return function(n){
        return n * multiplier
        /**
         * same as:
         * return {
         *  name: 'Jon'
         * surname: 'Doe'
         * }
         * 
         * but it is a function
         */
    }

}

const double = multiply(2)
const triple = multiply(3)
const quadruplo = multiply(4)

console.log(double)
console.log(triple)
console.log(quadruplo)