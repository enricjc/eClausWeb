var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var authController = require('../controllers/authController');

/*
 * GET
 */
router.get('/', userController.list);

/*
 * GET
 */
router.get('/:id', userController.show);

/*
 * POST
 */
router.post('/', userController.create);

/*
 * PUT
 */
router.put('/:id', authController.authenticate(), userController.update);

/*
 * DELETE
 */
router.delete('/:id', authController.authenticate(), userController.remove);

module.exports = router;
