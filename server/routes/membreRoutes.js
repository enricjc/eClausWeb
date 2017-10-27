var express = require('express');
var router = express.Router();
var membreController = require('../controllers/membreController.js');

/*
 * GET
 */
router.get('/', membreController.list);

/*
 * GET
 */
router.get('/:id', membreController.show);

/*
 * POST
 */
router.post('/', membreController.create);

/*
 * PUT
 */
router.put('/:id', membreController.update);

/*
 * DELETE
 */
router.delete('/:id', membreController.remove);

module.exports = router;
