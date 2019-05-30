const mongoose = require('mongoose');
const { Schema} = mongoose;

const Pelicula= new Schema({
    imagen:String,
    titulo:String,
    duracion:String,
    genero:String,
    sinopsis:String,
})

module.exports = mongoose.model('Pelicula', Pelicula);