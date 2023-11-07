//IIFE - Immediately Invoked Function Expression
/**
 * it's always a good to take your variables out of
 * the global scope, so it will not have any problems
 * over writing variables
 * 
 * we can do it with an IIFE
 */

(function(dNumber, wins, polesPositions){ //it is possible to receive arguments
    //now we can do whatever we want
    //and we're still free from the global enviroment
    const name = 'Daniel'
    console.log(name)
    console.log(dNumber)
    console.log('wins:', wins)

})(12, 10, 8) //auto executes the function
//passing arguments is optional

const name = 'Pierre'
console.log(name) //no relation at all to the iife