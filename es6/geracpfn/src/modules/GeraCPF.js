import ValidaCPF from './ValidaCPF';

//cria um numero aleatorio que tenha 9 digitos
export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  //formata o cpf para forma convencional
  formatado(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  }

  //chama a classe que valida o cpf
  geraNovoCpf() {
    //passa os numeros sem os digitos finais
    //criada pela classe
    const cpfSemDigito = this.rand();

    //cria o primeiro digito final
    const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
    //segundo digito final
    const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
    //concatena o cpf aleatorio com os 2 novos digitos
    const novoCpf = cpfSemDigito + digito1 + digito2;

    //retona o cpf formatado ex: 000.000.000-00
    return this.formatado(novoCpf);
  }
}
