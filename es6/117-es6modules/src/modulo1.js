//é possivel exportar junto a criançao da variavel, função etc...
export const name = 'Carlos'

const track = 'las vegas'

const team = {
  teamName: 'Ferrari',
  titles: 18,
  races: 2100
}

function displayTeam(name, team){
  return `${name} driver races for ${team.teamName}`
}

//podemos exportar tudo como
export {team, track}

//é possivel ter varios exports no mesmo arquivo

//sendo apenas 1 deles como padrão
export default displayTeam

//melhor maneira para exportar uma const como padrao
export {team as default, track}

//o erro acontece por ter dois exports como default