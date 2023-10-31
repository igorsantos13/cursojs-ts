commonFunction(); //hoisting - all data goes to the top off the app
function commonFunction(){
    console.log('default function')
}

//created as a no-named function
//but now is given to a const named displayName
const displayName = function(){
    console.log('name')
}

// arrow function
const executeFunction = (func) => {
    console.log('executing function...');
    displayName()
}

//function created as an object
const obj = {
    zion(){
        console.log('echo')
    }
}
obj.zion();