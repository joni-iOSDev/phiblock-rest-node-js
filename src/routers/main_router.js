const { Router } = require('express');
const router = Router();
const BlocksController = require('../controllers/blocks/blocks_controller');

router.get("/login", BlocksController.GET_PHI_LOGIN_BLOCKS);

module.exports = router;