function getDate(){
    const date = new Date()

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const execTimer = setInterval(()=>{
    console.log(getDate())
}, 1000)

setTimeout(()=>{
    clearInterval(execTimer)
}, 3000)

setTimeout(()=>{
    console.log('oi')
}, 5000)