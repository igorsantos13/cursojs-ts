export class Company {
  public readonly name: string; //acessado em toda app public nao é necessario
  protected readonly partners: Partner[] = []; //acessado pela classe e subclasses
  private readonly companyID: string; //acessado apenas pela classe em que foi criada

  constructor(name: string, companyID: string) {
    this.name = name;
    this.companyID = companyID;
  }

  //por padrao o TS adiciona qualquer metodo ou atributo como public
  //a menos que vc especifique que queira outro tipo de acesso
  addPartner(partner: Partner) {
    this.partners.push(partner);
  }

  showPartners(): void {
    for (const partner of this.partners) {
      console.log(partner);
    }
  }
}

export class Google extends Company {
  constructor() {
    super('Google', 'seilanetio');
  }

  popPartner(): Partner | undefined {
    const partner = this.partners.pop();
    return partner;
  }
}

//outra maneira de criar um class é no construtor informar a segurança
//o nome e o tipo dentro do construtor, assim pulando uma etapa como visto acima
export class Partner {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
  ) {}
}

const company1 = new Google();
const partner1 = new Partner('Max', 'Verstappen');
const partner2 = new Partner('Charles', 'Leclerc');
company1.addPartner(partner1);
company1.addPartner(partner2);

company1.showPartners();

company1.popPartner(); //remove 1 colaborador
//perceba que pelo metodo protected não é possivel acessar a variavel fora da classe
// company1.partner //comentado para nao gerar erro
