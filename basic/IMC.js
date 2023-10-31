function calcularIMC(altura, peso) {
  const imc = peso / (altura * altura);
  const resultado = ['Abaixo do peso', 'Peso normal', 'Sobrepreso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']
  console.log(imc)

  if(imc >= 39.9) console.log(resultado[5]) ;
  if(imc >= 34.9) console.log(resultado[4]);
  if(imc >= 29.9) console.log(resultado[3]);
  if(imc >= 24.9) console.log(resultado[2]);
  if(imc >= 18.5) console.log(resultado[1]);
  if(imc < 18.5) console.log(resultado[0]);

}

calcularIMC(1.7, 70);
