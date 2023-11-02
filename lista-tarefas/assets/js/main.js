const botaoAddTarefa = document.querySelector('.btn-tarefa')
const input = document.querySelector('.input-tarefa')
const campoTarefas = document.querySelector('.tarefas')

let inputArray = {task: []}

task = ['task 1', 'task2', 'task3']
botaoAddTarefa.addEventListener('click', (e)=>{
  e.preventDefault()
  //valor do input
  let inputValue = input.value
  //adicionar o valor em algo?
  inputArray.task.push(inputValue)
 
  inputArray.task.map(item => localStorage.setItem(item, item))
  
  
  pegarTarefa()
})

function pegarTarefa(){
  let li = document.createElement('li')

  let deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'Apagar'

  //deleta task
  deleteButton.addEventListener('click', (e)=> {
    const parentElement = e.target.parentElement
    const itemToRemove = parentElement.firstChild.nodeValue
    localStorage.removeItem(itemToRemove)
    parentElement.remove()
  })

  //pega tasks do LS
  const tasksFromLS = localStorage.getItem('task')
  console.log(tasksFromLS)

  //adiciona task no UL
  inputArray.task.map(tarefa => li.innerHTML = tarefa)
  
  //adiciona delete button na tela
  li.appendChild(deleteButton)
  
  //adiciona LI
  campoTarefas.appendChild(li)
}

function getElementsFromLS(){
  let tasksFromLS = []

  for (let key in localStorage){
    tasksFromLS = localStorage.getItem(key)
 }

 console.log(tasksFromLS)


}

// const getTasksFromLS = ()=> {
//   localStorage.getItem("task")
// } 
// document.onload(getTasksFromLS)

// console.log(getTasksFromLS)