const express = require('express');
const router = express.Router();
const controller = require('../controllers/users')

/* GET users listing. */
router.get('/:n1/:n2', controller.suma);
router.post('/', controller.multi);
router.put('/', controller.dividir);
router.patch('/', controller.potencia);
router.delete('/:n1/:n2', controller.resta);

module.exports = router;
