var express = require('express');
var router = express.Router();
var clauController = require('../controllers/clauController.js');

/*
 * GET
 */
router.get('/', clauController.list);

/*
 * GET
 */
router.get('/:id', clauController.show);

/*
 * POST
 */
router.post('/', clauController.create);

/*
 * PUT
 */
router.put('/:id', clauController.update);

/*
 * DELETE
 */
router.delete('/:id', clauController.remove);

module.exports = router;
