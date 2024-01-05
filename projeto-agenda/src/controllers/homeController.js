const Contato = require('../models/ContatoModel');

exports.index = async(req, res) => {
  if(req.session.user){
    const contatos = await Contato.buscaContatos();
    res.render('index', { contatos });

  }else{
    const contatos = 0
    res.render('index', {contatos})
  }
};
