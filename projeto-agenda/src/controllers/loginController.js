const Login = require('../models/LoginModel')

exports.index = (req, res) => {
  res.render('login');
  return;
}

exports.register = async function(req, res){
  try{
    const login = new Login(req.body)
    await login.register()
  
    if(login.error.length > 0){
      req.flash('error', login.error);
      req.session.save(function(){
        return res.redirect('back')
      })
      return;
    }
    req.flash('success', 'Usuario cadastrado com sucesso');
    req.session.save(function(){
      return res.redirect('back')
    })

  }catch(e){
    console.log(e)
    return res.render('404')
  }
}

exports.login = async function(req, res){
  try{
    const login = new Login(req.body)
    await login.login()
  
    if(login.error.length > 0){
      req.flash('error', login.error);
      req.session.save(function(){
        return res.redirect('back')
      })
      return;
    }

    if(!login.user){
      req.flash('error', login.error);
      req.session.save(function(){
        return res.redirect('back')
      })
      return;
    }
    
    req.flash('success', 'Usuario cadastrado com sucesso');
    req.session.user = login.user;
    req.session.save(function(){
      return res.redirect('back')
    })

  }catch(e){
    console.log(e)
    return res.render('404')
  }
}