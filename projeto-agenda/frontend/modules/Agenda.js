const validator = require('validator')
// import validator from "validator"

export default class Agenda{
  constructor(formAgenda){
    this.form = document.querySelector(formAgenda)
  }

  init(){
    this.events()
  }

  events(){
    if(!this.form) return
    this.form.addEventListenter('submit', e => {
      e.preventDefault()
      this.valida(e)
    })
  }

  valida(e){
    const el = e.target
    let error = false

    const nome = el.document.querySelector('form-nome') //('input[name="nome"]')
    const email = el.document.querySelector('form-email')//('input[name="email"]')
    const telefone = el.document.querySelector('form-telefone')//('input[name="telefone"]')

    if(!nome || typeof nome !== 'string'){
      error = true
      alert('Nome é obrigatório!')
    } 

    if(!validator.isEmail(email)) {
      error = true
      alert('Email inválido')
    }

    if(!email && !telefone){
      error = true
      alert('Email ou telefone são obrigatórios!')
    } 

    if(!error) el.submit()
  }
}