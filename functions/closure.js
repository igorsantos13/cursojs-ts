//closure is the ability of a function to remember
//its lexic scope

function returnFunction(){
    const name = 'Yuki'

    //closure:
    //this anonymous function can access its parents
    //variable due to hierance


    //this function has 3 scopes
    //it' own scope
    //parents scope
    //and finaly, global scope
    return function(){
        return name;
    }
}
const execFunc = returnFunction();
console.log(execFunc) //[Function]
console.log(execFunc()) //Yuki