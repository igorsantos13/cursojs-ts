const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
  titulo: {type: String, required: true},
  descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema)

module.exports = HomeModel

//forma mais comum de criar um model
// class Home {

// }

// module.exports = Home