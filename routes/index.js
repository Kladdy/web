const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/index_controller');

get_index_url = '/'
router.get(get_index_url, (req, res) => {
    IndexController.get(req, res)
});

module.exports = router;