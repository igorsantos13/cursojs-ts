class ControleRemoto{
    constructor(modelo){
        this.modelo = modelo;
        this.volume = 0;
    }

    //método de instancia
    aumentarVolume(){
        this.volume += 2;

    }
    //método de instancia
    diminuirVolume(){
        if(this.volume <= 0) return
        this.volume -=2;
    }

    //método estatico - nao necessita da instancia para ser executada
    //tbm com isso, não tem acesso aos valores da instancia
    static trocarPilha(){
        console.log('trocando pilha...')
    }

    //métido estatico
    static soma(x,y){
        return x + y
    }

}

const controle = new ControleRemoto('Samsung')
controle.aumentarVolume()
controle.aumentarVolume()
controle.aumentarVolume()
controle.aumentarVolume()
controle.diminuirVolume()
console.log(controle)

ControleRemoto.trocarPilha()
console.log(ControleRemoto.soma(5,11))