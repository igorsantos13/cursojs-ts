## Comandos importantes do npm
- npm init -y
> cria um package.json com tudo necessario para a aplicação

- npm install "package"
  - npm install package 4.x 
  > Instala a versão mais recente do pacote dado a versão "4"
> Instala o pacote

- npm i "package" --save-dev
  - npm i "package" -D
    > É um atalho para o mesmo comando que salva como desenvolvimento
> Instala como dependencia de desenvolvimento, usado para algo que não é necessario em produção

- npm i "package" --save-prod
> Instala o pacote como produção

- npm i "package" -E
> Instala a versão exata do pacote, assim não atualiza "express": "4.17.1"

- npm update
> Atualiza todos os pacotes para versão mais recente

- npm i "package@2.11.5"
> Instala a versão especifica do pacote

- npm uninstall package
> Remove de toda a aplicação o pacote informadoo

## Comandos extras do npm
- Listar os pacotes instalados
  - npm ls --depth=0
    - mostra apenas os pacotes instalados por você
- Ver quais pacotes estão desatualizados
  - npm outdated
    - lista todos os pacotes que precisão ser atualizados


## Informações uteis do npm
Todo pacote cuja versão possui um "^" significa que aquele pacote pode ser atualizado (apenas minors e patches, leia para mais) ex: "express": "^4.17.1" =/= "4.17.1" (npm i pacote -E) que não pode ser alterada


## Como funciona as versões dos pacotes?
Os pacotes geralmente são dividos em (ex: 4.17.1)
Major > 4 = representam grandes mudanças
Minor > 17 = representam mudanças menores
patch > 1 = leves correções no pacote

- É comum que mudanças "major" quebrem compatibilidade com outras versões, por ser uma nova "fase" do pacote.


## Atualizações do npm
Já sabemos que quando tivermos um "^" o pacote pode ser atualizado, no entanto evita que o pacote quebre a aplicação.
Como mudanças majors podem acarretar em problemas o "^" permite apenas atualizações de Minors e Patches, já que são relacionadas a leves melhoras.

Temos também a fag "~" que permite apenas atualizações de patch.