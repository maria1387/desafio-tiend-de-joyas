const {Router} = require('express');
// const pool = require('../db')
const { getAllJoyas, getJoyasfitro } = require('../controllers/joyas.controllers')
const {reportar } = require('../middlewares/report.middlewares')

const router = Router();
//obtener datos
router.get('/joyas', reportar, getAllJoyas)
//obtener dato de filtro 
router.get('/joyas/filtros',reportar, getJoyasfitro)

module.exports = router;