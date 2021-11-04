const express = require('express');
// const { check } = require('express-validator');
const router = express.Router();
const { track } = require('../segment_analytics/analytics')

const IndexController = require('../controllers/index_controller');

get_index_url = '/'
router.get(get_index_url, (req, res) => {
    track(req, 'get_home', get_index_url)

    IndexController.get(req, res)
});

// router.post('/',
// [
//     check('name')
//     .isLength({ min: 1 })
//     .withMessage('Please enter a name'),
//     check('email')
//     .isLength({ min: 1 })
//     .withMessage('Please enter an email'),
// ], (req, res) => {
//     IndexController.post(req, res)
// });

module.exports = router;