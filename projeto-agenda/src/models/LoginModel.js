const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs')
const { default: isEmail } = require('validator/lib/isEmail');

const LoginSchema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true}
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body){
    this.body = body
    this.error = []
    this.user = null
  }

  async login(){
    this.valida()
    if(this.error.length > 0) return
    this.user = await LoginModel.findOne({email: this.body.email})

    if(!this.user){
      this.error.push('Usuário já existe')
      return;
    }

    if(bcryptjs.compareSync(this.body.password, this.user.password)){
      this.error.push('Senha inválida')
      this.user = null
      return;
    }


  }

  async register(){
    this.valida()
    if(this.error.length > 0) return

    this.userExists()

    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt)

    try{
      this.user = await LoginModel.create(this.body)

    }catch(e){
      console.log(e)
    }
  }

  async userExists(){
    this.user = await LoginModel.findOne({email: this.body.email})
    if(this.user) this.error.push('Usuário já existe!')

  }
  valida(){
    this.cleanUp()
    //email valido
    if(!validator.isEmail(this.body.email)) this.error.push('Email inválido')
    //senha entre 3 e 50 charsd
    if(this.body.password.length < 3 || this.body.password.length > 50){
      this.error.push('Senha deve ter entre 3 e 50 caracteres')
    } 
  }

  //garante que todos os campos do formulario sejam strings
  //se nao for retorna uma string vazia 
  cleanUp(){
    for(let key in this.body){
      if(typeof this.body[key] !== 'string'){
        this.body[key] = ''
      }
    }

    //garante que estamos verficando apenas os campos importantes
    //para validação
    this.body = {
      email : this.body.email,
      password : this.body.password
    }
  }
}

module.exports = Login;
