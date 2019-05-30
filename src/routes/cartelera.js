const express = require('express');
const router = express.Router();

const Pelicula = require('../models/cartelera');

router.get('/', async (req,res) =>{
    const peliculas = await Pelicula.find();
    res.json(peliculas);

});

router.post('/', async (req, res)=>{
    req.body
})


module.exports = router;