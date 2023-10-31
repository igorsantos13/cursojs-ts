function relogio(){

  let segundos = 0; 
  let tempo;
  const relogio = document.querySelector('.relogio')
  
  function iniciarTempo() {
    tempo = setInterval(() => {
      segundos++;
  
      relogio.innerHTML = formatarHorario(segundos)
    }, 1000);
  }
  
  function formatarHorario(segundos){
    const data = new Date(segundos * 1000)
  
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: "UTC"
    })
  }
  
  document.addEventListener("click", (e)=>{
    const el = e.target
  
    if(el.classList.contains('iniciar')){
      relogio.classList.remove('pausado');
      clearInterval(tempo)
      iniciarTempo()
    }
  
    if(el.classList.contains("pausar")){
      clearInterval(tempo)
      relogio.classList.add("pausado")
    }
  
    if(el.classList.contains("zerar")){
      clearInterval(tempo)
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }
  })
}
relogio()