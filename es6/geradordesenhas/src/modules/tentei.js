import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');
  
  export default () => {
    gerarSenha.addEventListener('click', (e)=>{
      e.preventDefault()
      let camposMarcados = []
      if(chkMaiusculas.checked) camposMarcados.push('maiuscula')
      if(chkMinusculas.checked) camposMarcados.push('minuscula')
      if(chkNumeros.checked) camposMarcados.push('numeros')
      if(chkSimbolos.checked) camposMarcados.push('simbolos')
      camposMarcados.push(qtdCaracteres.value)
      senhaGerada.innerText = criaSenha(camposMarcados)
    })

  }


function criaSenha(campos){
  const senhaArray = [];
  
  const maiusculaGerado = campos.find(item => item === 'maiuscula' ? geraMaiuscula() : '')
  const minusculaGerado = campos.find(item => item === 'minuscula' ? geraMinuscula() : '')
  const numeroGerado = campos.find(item => item === 'numeros' ? geraNumero() : '')
  const simboloGerado = campos.find(item => item === 'simbolos' ? geraSimbolo() : '')
  const qtd = campos.find(item => typeof item === 'number' ? item : '')

  maiusculaGerado && senhaArray.push(maiusculaGerado)
  minusculaGerado && senhaArray.push(minusculaGerado)
  numeroGerado && senhaArray.push(numeroGerado)
  simboloGerado && senhaArray.push(simboloGerado)
  
  return senhaArray.join('').slice(0, qtd);

}

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]{}!@#$%*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];