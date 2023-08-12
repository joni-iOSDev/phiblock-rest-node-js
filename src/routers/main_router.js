const { Router } = require('express');
const router = Router();
const BlocksController = require('../controllers/blocks/blocks_controller');

router.get("/login", BlocksController.GET_PHI_LOGIN_BLOCKS);
router.get("/exploration", BlocksController.GET_PHI_EXPLORATION_BLOCKS);

module.exports = router;