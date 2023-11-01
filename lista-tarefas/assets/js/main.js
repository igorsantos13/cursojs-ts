const botaoAddTarefa = document.querySelector('.btn-tarefa')
const input = document.querySelector('.input-tarefa')
const campoTarefas = document.querySelector('.tarefas')

let inputArray = []

botaoAddTarefa.addEventListener('click', (e)=>{
  let inputVal = input.value
  e.preventDefault()

  inputArray.push(inputVal)
  // console.log(inputArray)
  pegarTarefa()
})

function pegarTarefa(){
  let li = document.createElement('li')

  let deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'Apagar'

  deleteButton.addEventListener('click', (e)=> {
    const parentElement = e.target.parentElement
    parentElement.remove()
  })

  inputArray.map(tarefa => li.innerHTML = tarefa)

  li.appendChild(deleteButton)

  campoTarefas.appendChild(li)
}