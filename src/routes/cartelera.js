const express = require('express');
const router = express.Router();

const Pelicula = require('../models/pelicula');

router.get('/', async (req,res) =>{
    const peliculas = await Pelicula.find();
    res.json(peliculas);

});

router.post('/', async (req, res)=>{
    const pelicula = new Pelicula(req.body);
    await pelicula.save();
    res.json({
        status: 'Pelicula guardada'
    });
})

router.put('/:id', async (req, res)=>{
    await Pelicula.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Pelicula Actualizada'
    });
})

router.delete('/:id', async (req, res)=>{
    await Pelicula.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Pelicula eliminada'
    });
})


module.exports = router;