//prototype acessa o "objeto pai"
//o JS link o __proto__ ou prototype ao objeto principal
//__proto__ === prototype

// OBJETO PAI:
function Driver(name, carNumber, team){
    this.name = name
    this.carNumber = carNumber
    this.team = team

}
//por questoes de performance é interessante adicionarmos METODOS como __proto__
Driver.prototype.presentation = function(){
    return `${this.name} drives for ${this.team}`
}

//() => {} =/= function() - arrow cria um escopo proprio, function "recebe"? o escopo

//o prototype do obejto abaico vem do new Driver, 
//entao, qualquer funcao de la é recebido no filho
const driver1 = new Driver('Piastri', 81, 'McLaren')
console.log(Driver.prototype === driver1.__proto__) //true
console.log(driver1.presentation())