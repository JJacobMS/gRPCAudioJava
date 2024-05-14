const router = require('express').Router();
const categorias = require('../controllers/categorias.controller');

router.get('/', categorias.getAll);

router.get('/:id', categorias.get);

router.post('/', categorias.create);

router.put('/:id', categorias.update);

router.delete('/:id', categorias.delete);

module.exports = router