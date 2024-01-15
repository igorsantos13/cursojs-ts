//Recomendado

//Condicional
//HTMLBodyElement | null
const body = document.querySelector('body');
if(body) body.style.backgroundColor = 'red';

// Type Assertion (recomendado!) - faça isso apenas quando tenha certeza que o elemento exista
const body3 = document.querySelector('body') as HTMLBodyElement;

//Não recomendado
// Non-Null assertion (!) informa ao TS que o objeto nao sera nulo em nenhum momento (NÃO RECOMENDADO)
const body2 = document.querySelector('body')!;

//tira de qualquer tipo para depois associar como number - apenas nao faça
const body4 = (document.querySelector('body') as unknown) as number;
